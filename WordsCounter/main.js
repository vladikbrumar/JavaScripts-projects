const textInput = document.querySelector('.text-input');
const wordsCount = document.querySelector('#word-count');
const lettersCount = document.querySelector('#letter-count');
const spacesCount = document.querySelector('#space-count');
const resetBtn = document.querySelector('.btn-reset');

textInput.addEventListener('input', () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    let wordCount = 0;

    outer:
    for (const text of splitted) {
        if(text.length >= 2){
            wordCount++;
        }
  
    }

    wordsCount.textContent = wordCount;
    lettersCount.textContent = letterCount;
    spacesCount.textContent = spaceCount;

})