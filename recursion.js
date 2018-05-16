// RECURSIVE BINARY SEARCH

// let sortedList = [1,2,3]
let sortedList = [4,5,6,8,12,13,14,15]
let searchValue = 999

function recursiveBinarySearch( sortedList, searchValue ) {
    let leftMarginIndex = 0
    let rightMarginIndex = sortedList.length - 1
    
    function divideAndCheck( rightMarginIndex, leftMarginIndex ) {
        
        let middleIndex = Math.trunc( ( rightMarginIndex + leftMarginIndex ) / 2 )
        console.log( "leftMarginIndex =", leftMarginIndex, "rightMarginIndex =", rightMarginIndex, "middleIndex =", middleIndex )
    
        if( sortedList[middleIndex] == searchValue ){
            console.log( "value found at index:", middleIndex )
            return middleIndex

        } else if( (rightMarginIndex - leftMarginIndex) > 0 ){
            
            if( sortedList[middleIndex] < searchValue ){
                
                leftMarginIndex = middleIndex + 1
                divideAndCheck( rightMarginIndex, leftMarginIndex )
                
            } else if( sortedList[middleIndex] > searchValue ){
                
                rightMarginIndex = middleIndex - 1
                divideAndCheck( rightMarginIndex, leftMarginIndex )

            }
        } else {
            console.log ( "value not found")
            return null
        }
    }
    return divideAndCheck( rightMarginIndex, leftMarginIndex )

}

recursiveBinarySearch( sortedList, searchValue )

function tribonacci( num ){
    // console.log( "call with num =", num )
    // if( num == 3 ){return 2}
    if( num == 2 ){return 1}
    if( num == 1 ){return 1}
    if( num == 0 ){return 0}
    return tribonacci( num - 1 ) + tribonacci( num - 2 ) + tribonacci( num - 3 )
}

// for( let i = 0; i < 9; i++){
//     t = tribonacci( i )
//     console.log( "Tribonacci of", i, " =", t)
// }

// let t = tribonacci( 8 )
// console.log( "Tribonacci =", t)


function fibonacci( num ){
    console.log( "call with num =", num )
    if( num == 2 ){return 1}
    if( num == 1 ){return 1}
    if( num == 0 ){return 0}
    return fibonacci( num - 1 ) + fibonacci( num - 2 )
}

// f = fibonacci( 7 )
// console.log( "Fibonacci =", f )

function factorial( num ){
    console.log( "call with num =", num )
    if( num == 1 ){
        return 1
    }
    if( num == 0 ){
        return 0
    }
    return num * factorial( num - 1 )
}

// f = factorial ( 5 )
// console.log( "factorial is: ", f )


function factorial( num ) {
    console.log( "call with num = ", num )
    if( num < 1 ){
        return 0
    }
    if( num > 1 ){
        return num * factorial( num - 1)
    }
    return 1
}

function sumOfIntegers( num ){
    console.log( "sum of integers called with num = ", num )
    if (num > 0){
        return num + sumOfIntegers( num - 1)
    }
    return 0
}

// let s = sumOfIntegers( 3 )
// console.log( s )


function sumOfIntegers( num ){
    console.log( "recursive call with number:", num )
    if( num > 0 ) {
        return num + sumOfIntegers( num - 1 )
    }
    return 0
}

// let sum = sumOfIntegers( 3 )
// console.log( "sum of integers is", sum )


function rec ( num ) {
    console.log( "recursive call with number:", num )
    if( num < 3 ){
        rec( ++num )
    }
    console.log("end with number", num)
    return num
}

// n = rec( 1 )
// console.log( "returned value:", n )