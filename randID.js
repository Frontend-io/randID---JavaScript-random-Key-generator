function randID(){
	// RandID - v 1.0
	// By - Iyobosa Jefferson Osagie
	// Twitter - @frontend_io
	// Github - @frontend-io

	// For best performance, please feed in a reasonable outputLength ::: outputLength === numbers of loops !

    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const numerals = [0,1,2,3,4,5,6,7,8,9]
    let pushed = [] ;
    let outputRand = '';
    let lengthOfOutput = 10; /* Default length is 10, you can change it to suite your need or supply length as a parameter when calling the function */


    // If a parameter is passed, the first index is considered the outputLength length. This overrides any pre-hardcoded value within the function

    if (arguments.length > 0) {
    	let parameter = arguments[0]
    	lengthOfOutput = parameter
    }

    // Generate a random id from supplied array
    function randNum(array){
    	const randNum = Math.floor(Math.random() * array.length)
        return (
           array[randNum]
        )
    }

    for( let i = 0; i < (lengthOfOutput - 1) ; i++){
    	// Hiding i from the unused var warning in the console
    	JSON.stringify(i)
    	let generatedNum = `${randNum(numerals)}-${randNum(alphabets) }` 
    	// Making sure we don't have duplicates in our array
    	if (!pushed.includes(generatedNum)) {
            pushed.push(generatedNum)
        }
    }
    
    // Map the array to the output string
    pushed.map((item) =>{
        return(
            outputRand += `${(item)}`
        )
    })

    // Checking to make sure we have a valid output length set
    switch(lengthOfOutput){
    	case 0 :  console.warn( "RandID notice: ", "You have not specified a valid output length!")
    		break;
    	case 1 :  console.warn( "RandID notice: ", "Output Length must be greater than 1!")
    		break;
    	default:
    		return outputRand
    }
}
