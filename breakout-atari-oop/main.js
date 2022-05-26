const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 1000
canvas.height = 600

let X = 0
let barWidth = 100
let barHeight = 20
let directionY = 1

document.addEventListener("keydown", ev => {
    if (!ev.repeat && ev.code == "KeyD"){
        return directionX = 2
    }
    if (!ev.repeat && ev.code == "KeyA"){
        return directionX = -2
    }
})

document.addEventListener("keyup", ev=>{
    if (ev.code == "KeyD" || ev.code == "KeyA"){
        directionX = 0
    }
})

function mainLoop(){
    context.clearRect( 0, 0 , canvas.width , canvas.height )
    context.fillRect( X , canvas.height-barHeight,  barWidth, barHeight )
    X += directionY
    if (X <=0 || X >= canvas.width - barWidth){
        directionY *= -1
    }   
    requestAnimationFrame (mainLoop, 60 / 1000)
}

requestAnimationFrame (mainLoop, 60 / 1000)

document.body.append(canvas)