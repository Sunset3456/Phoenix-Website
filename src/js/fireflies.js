//Sparks

const rng = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rcg = colors => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const createFireflyColor = color => {
    const palette = Array.isArray(color) ? color.filter(Boolean) : [color]
    const selectedColor = rcg(palette)
    const fill = Array.isArray(selectedColor?.fill) ? rcg(selectedColor.fill) : selectedColor?.fill || '#ffffea'
    const glow = Array.isArray(selectedColor?.glow) ? rcg(selectedColor.glow) : selectedColor?.glow || ['#f88f2d', '#f16412', '#8b2a00']

    return { fill, glow }
}

const distance = (x1, y1, x2, y2) => {
    const xDist = x2 - x1
    const yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

let canvas, c, animationID, canvasWidth = 0, canvasHeight = 0

const mouse = {
    x: undefined,
    y: undefined,
    prevX: undefined,
    prevY: undefined,
    counter: 0,
    isMoving: () => {
        if (mouse.counter > 50) return false
        return true
    }
}

let maxRadius
const fireflies = []
const MIN_FIREFLY_RADIUS = 15 // Change this to set the minimum firefly size.
const animationLoop = _ => {
    animationID = requestAnimationFrame(animationLoop) // Create an animation loop
    c.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas

    if (mouse.prevX == mouse.x && mouse.prevY == mouse.y) mouse.counter++

    for (let i = 0; i < fireflies.length; i++) {
        fireflies[i].fly()

        if (fireflies[i].x < 0 - fireflies[i].radius || fireflies[i].x > canvasWidth + fireflies[i].radius || fireflies[i].y < 0 - fireflies[i].radius || fireflies[i].y > canvasHeight + fireflies[i].radius) {
            fireflies[i].x = rng(fireflies[i].radius, canvasWidth - fireflies[i].radius)
            fireflies[i].y = rng(fireflies[i].radius, canvasHeight - fireflies[i].radius)
        }
    }

    mouse.prevX = mouse.x
    mouse.prevY = mouse.y
}

const resizeEH = _ => {
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    canvasWidth = rect.width
    canvasHeight = rect.height
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    c.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const mouseEH = _ => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    mouse.counter = 0
}

class Fireflies {
    static initialize(quantity = Math.floor((window.innerHeight + window.innerWidth) / 150), radius = [5, 25 + Math.floor((window.innerHeight + window.innerWidth) / 100)], color = [{
        fill: '#ffffea',
        glow: ['#f4a135', '#f38028', '#f36528', '#ff4d00']
    }], collision = true, pulse = true, flicker = true, connect = false) {
        this.terminate() // Terminates all previously initialized instances
        canvas = document.getElementById('sparks') // Get canvas element from document
        c = canvas.getContext('2d') // Get context to access 2D canvas functions
        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        canvasWidth = rect.width
        canvasHeight = rect.height
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        /*
        canvas.width = window.innerWidth // Set canvas' width to full width of the window
        canvas.height = window.innerHeight // Set canvas' height to full height of the window
        */
        c.globalCompositeOperation = 'screen'
        c.setTransform(dpr, 0, 0, dpr, 0, 0)
        for (let i = 0; i < quantity; i++) {
            let r
            if (Object.prototype.toString.call(radius) === '[object Array]') {
                const minRadius = Math.max(MIN_FIREFLY_RADIUS, radius[0])
                const maxRadiusValue = Math.max(minRadius, radius[1])
                r = rng(minRadius, maxRadiusValue)
                maxRadius = 1.5 * maxRadiusValue
            } else {
                r = Math.max(MIN_FIREFLY_RADIUS, radius)
                maxRadius = 1.5 * r
            }
            const x = rng(r, canvasWidth - r)
            const y = rng(r, canvasHeight - r)
            const randomColor = createFireflyColor(color)
            fireflies[i] = new Firefly(x, y, r, randomColor, collision, pulse, flicker, connect)
        }
        addEventListener('resize', resizeEH)
        addEventListener('mousemove', mouseEH)
        animationLoop()
    }
    static terminate() {
        cancelAnimationFrame(animationID)
        removeEventListener('resize', resizeEH)
        removeEventListener('mousemove', mouseEH)
        for (let i = 0; i < fireflies.length; i++) {
            fireflies.splice(0, fireflies.length)
        }
        if (canvas) {
            canvas.remove()
        }
    }
}
class Firefly {
    constructor(x, y, radius, color, collision, pulse, flicker, connect) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = {
            fill: color.fill,
            glow: color.glow
        }
        this.velocity = {
            x: Math.random() * Math.PI,
            y: Math.random() * Math.PI
        }
        this.glow = {
            pulse: pulse,
            flicker: flicker,
            default: undefined,
            strength: pulse ? rng(16, 255) : 191,
            growing: true
        }
        this.collision = collision
        this.connect = connect
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        const gradient = c.createRadialGradient(this.x, this.y, this.radius / 10, this.x, this.y, this.radius)
        gradient.addColorStop(1, this.color.glow + '00')
        gradient.addColorStop(0.1, this.color.glow + this.glow.strength.toString(16))
        gradient.addColorStop(0, this.color.fill)
        c.fillStyle = gradient
        c.fill()
        c.closePath()
    }
    fly() {
        this.collide()
        this.stayWithinView() // Screenbound
        this.x += 0.75 * Math.cos(this.velocity.x) // The number is the speed modifier
        this.y += 0.75 * Math.sin(this.velocity.y) // The number is the speed modifier
        this.calcGlow()
        // this.leaveTrail()
        this.draw()
    }
    stayWithinView() {
        const minX = this.radius
        const maxX = canvasWidth - this.radius
        const minY = this.radius
        const maxY = canvasHeight - this.radius

        if (this.x <= minX) {
            this.x = minX + 0.5
            this.velocity.x = Math.PI - this.velocity.x
        } else if (this.x >= maxX) {
            this.x = maxX - 0.5
            this.velocity.x = Math.PI - this.velocity.x
        } else {
            this.velocity.x += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180 // Math.random() * 0.34 - 0.17 for short
        }

        if (this.y <= minY) {
            this.y = minY + 0.5
            this.velocity.y = -this.velocity.y
        } else if (this.y >= maxY) {
            this.y = maxY - 0.5
            this.velocity.y = -this.velocity.y
        } else {
            this.velocity.y += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180 // Math.random() * 0.34 - 0.17 for short
        }
    }

    collide() {
        if (this.collision) {
            this.calcField()
            const thisIndex = fireflies.indexOf(this)
            for (let i = 0; i < fireflies.length; i++) {
                if (fireflies[i] != fireflies[thisIndex]) {
                    const dist = distance(this.x, this.y, fireflies[i].x, fireflies[i].y)
                    const radii = this.radius + fireflies[i].radius
                    if (dist <= radii) {
                        this.velocity.x -= 0.035
                        this.velocity.y -= 0.035
                        if (this.connect) {
                            c.save()
                            c.beginPath()
                            c.moveTo(this.x, this.y)
                            c.lineTo(fireflies[i].x, fireflies[i].y)
                            c.strokeStyle = `#ffffff${(Math.floor(255 - (238 * dist / radii))).toString(16)}`
                            c.stroke()
                            c.closePath()
                            c.restore()
                        }
                    }
                }
            }
        }
    }
    calcField() {
        if (!mouse.isMoving()) return

        const k = 8 // Max velocity constant

        let deltaX = this.x - mouse.x // Horizontal distance between firefly and mouse
        let deltaY = this.y - mouse.y // Vertical distance between firefly and mouse

        let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) // Distance between firefly and mouse
        let angle = Math.atan(Math.abs(deltaY) / Math.abs(deltaX)) // Angle of firefly with respect to mouse

        if (distance > 7 * maxRadius) return

        let velocity = k / Math.pow(distance / (maxRadius), 1.5) // Velocity is modelled after electric field (inaccurate more conversions needed for true velocity)
        if (distance < this.radius) velocity = k // Sets limit on field strength, this is in case mouse is within the radius

        let vx = velocity * Math.cos(angle) * (deltaX / Math.abs(deltaX)) // Horizontal component of v is cos of angle times net velocity as well as the direction
        let vy = velocity * Math.sin(angle) * (deltaY / Math.abs(deltaY)) // Vertical component of v is sin of angle times net velocity as well as the direction

        if (Number.isFinite(vx)) this.x += vx //Arctan function causes some NaN numbers for fireflies, ignore these
        if (Number.isFinite(vy)) this.y += vy
    }
    calcGlow() {
        if (this.glow.default === undefined) {
            this.glow.default = this.glow.strength
        }
        if (this.glow.pulse) {
            if (this.glow.default >= 255) {
                this.glow.growing = false
            } else if (this.glow.default <= 48) {
                this.glow.growing = true
            }
            if (this.glow.growing) {
                this.glow.default++
                this.glow.strength = this.glow.default
            } else {
                this.glow.default--
                this.glow.strength = this.glow.default
            }
        }
        if (this.glow.flicker) {
            if (Math.random() > 0.99) {
                this.glow.strength = rng(16, 255)
            } else {
                this.glow.strength = this.glow.default
            }
        }
    }
}
Fireflies.initialize()