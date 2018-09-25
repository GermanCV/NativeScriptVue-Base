import axios from 'axios';
export default axios.create({
  baseURL: 'https://api-nodejs-recipe.herokuapp.com/'
});