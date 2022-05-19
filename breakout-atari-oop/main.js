const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 800
canvas.height = 600

let y = 0
let barSize = 100
let  directionY = 1

function mainLoop(){
    context.clearRect( 0, 0 , canvas.width , canvas.height )
    context.fillRect( 10, y , 20 , 100 )
    y += directionY
    if (y <=0 || y >= canvas.height - barSize){
        directionY *= -1
    }   
    requestAnimationFrame (mainLoop, 60 / 1000)
}

requestAnimationFrame (mainLoop, 60 / 1000)

document.body.append(canvas)