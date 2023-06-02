// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]], 
		['second', [2, 6, 8, 4, 14, 12, 10]], 
		['third', [9, 3, 1]], 
	]
}

// Only edit below

const [ [ , first], [ , second], [ , third] ] = data.lists

const result = []

const extractBiggest = () => {
	if (first[first.length -1 ] > second[second.length-1]) {
		return first.pop()

	}else if (second[second.length-1] > first[first.length - 1]) {
        return (second).pop()

    } else if (second[second.length-1] > third[third.length - 1]) {
		return second.pop()

	} else if (first[first.length -1 ] > third[third.length - 1]) {
        return first.pop()  

    }else if (third[third.length - 1] > second[second.length-1] ) {
        return third.pop() 

    } else if (third[third.length - 1] > first[first.length -1]) {
        return third.pop()

    } else return third.pop()
    
	
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

//[10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]