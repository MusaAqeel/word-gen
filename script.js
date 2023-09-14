// function fetchRandomWordDefinition() {
//     fetch('https://random-word-api.herokuapp.com/word')
//       .then(response => response.json())
//       .then(data => {
//         const word = data[0];
//         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//           .then(response => response.json())
//           .then(data => {
//             document.querySelector('.word').innerHTML = data[0].word;
//             document.querySelector('.phonetic').innerHTML = data[0].phonetics[0].text;
//             document.querySelector('.definition').innerHTML = data[0].meanings[0].definitions[0].definition;
//           });
//       });
//   }
  
//   window.addEventListener('load', fetchRandomWordDefinition);
  
async function fetchRandomWordDefinition() {
    try {
      const responseWord = await fetch('https://random-word-api.herokuapp.com/word');
      const wordData = await responseWord.json();
      const word = wordData[0];
  
      const responseDefinition = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const definitionData = await responseDefinition.json();
  
      const wordElement = document.querySelector('.word');
      const phoneticElement = document.querySelector('.phonetic');
      const definitionElement = document.querySelector('.definition');
  
      wordElement.innerHTML = definitionData[0].word;
      phoneticElement.innerHTML = definitionData[0].phonetics[0].text;
      definitionElement.innerHTML = definitionData[0].meanings[0].definitions[0].definition;
    } catch (error) {
      console.error(error);
    }
  }
  
  window.addEventListener('load', fetchRandomWordDefinition);
  