export default () => {
  return fetch('./api/characters.json')
    .then(response => response.json())
    .then(responseData => responseData.results)
}