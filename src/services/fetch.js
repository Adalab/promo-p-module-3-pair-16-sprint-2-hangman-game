const getWord = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/random-word-v1/word.json'
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getWord;
