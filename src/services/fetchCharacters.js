export default () => {
  return fetch('http://localhost:3000/api/characters.json')
    .then(response => response.json())
    .then(responseData => responseData.results)
}