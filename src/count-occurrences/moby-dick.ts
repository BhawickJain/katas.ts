//moby dick
fetch("https://www.gutenberg.org/files/2701/2701-0.txt")
    .then(data => data.text())
    .then(processText)
    .catch(err => console.error(err))

function processText(text: string){
    const listOfWords = text.slice(0, 100000).split(/\W/);    
    // const result = getMostCommonWords(listOfWords, 200);
    console.log(listOfWords);
}

// function getMostCommonWords(listOfWords, numOfWinners){
//     //TODO: you need to implement this
// }