//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

var canvas = [
    [3,3,3,2,2],
    [2,2,3,4,2],
    [7,3,3,7,3],
    [1,5,3,4,1],
    [1,1,3,1,1]
]

func floodFill( canvas: [[Int]], v: Int, h: Int, floodColor: Int ) -> [[Int]]{
    
    let colorToChange = canvas[v][h]
    if colorToChange == floodColor {return canvas}
    
    var newCanvas = canvas
    
    func fillArount (v: Int, h: Int){
        if( newCanvas[v][h] == colorToChange ){
            newCanvas[v][h] = floodColor
        } else {
            return
        }
        
        if v > 0 {
            fillArount(v: v - 1, h: h)
        }
        if v < canvas.count - 1 {
            fillArount(v: v + 1, h: h)
        }
        if h > 0 {
            fillArount(v: v, h: h - 1)
        }
        if h < canvas[v].count - 1 {
            fillArount(v: v, h: h + 1)
        }
    }
    fillArount(v: v, h: h)
    return newCanvas
}

print( "Before" )
for line in canvas {
    print( line )
}

let newCanvas = floodFill(canvas: canvas, v: 2, h: 2, floodColor: 9)

print( "After" )
for line in newCanvas {
    print( line )
}
