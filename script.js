function fetchRandomWordDefinition() {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(response => response.json())
      .then(data => {
        const word = data[0];
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          .then(response => response.json())
          .then(data => {
            document.querySelector('.word').innerHTML = data[0].word;
            document.querySelector('.phonetic').innerHTML = data[0].phonetics[0].text;
            document.querySelector('.definition').innerHTML = data[0].meanings[0].definitions[0].definition;
          });
      });
  }
  
  window.addEventListener('load', fetchRandomWordDefinition);
  