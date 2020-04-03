let testArray = []
$('.question-box').each(function( index ) {
    let testObject = {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: '',
        correctAnswerId: '',
        codeString: ``,
        options: [],
        answerExplanation: ``,
        referenceImage: ''
    }

    testObject['explanation'] = $(this).find(".mra-25").text().trim()

    let options = []
    let correctAnswerId = []

    $(this).find(".answers-block").find("div[class^='custom-input']").each(function(index2){
        const referenceKeys = ['A','B','C','D','E','F','G'];
        const questionOption = {
            'id': referenceKeys[index2],
            markdown: $(this).text().replace(']','').replace(/(\r\n|\n|\r)/gm, " ").trim().slice(2).trim()
        }

        if($(this).find('label.correct-ans').length > 0) {
            correctAnswerId.push(referenceKeys[index2])
        }


        options.push(questionOption)
    })


    testObject['options'] = options
    testObject['correctAnswerId'] = correctAnswerId
    testObject['answerExplanation'] = $(this).find(".que-explanation").text()

    testArray.push(testObject)
});
console.log(JSON.stringify(testArray))
