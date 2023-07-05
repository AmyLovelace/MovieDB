import axios from "axios";

const movie_id = 725201

const url = `${process.env.API_URL}/${movie_id}/recommendations`;
console.log('holi');
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`
  }
};

axios.get(url, options)
  .then(response => {
    console.log(response.data);
    const title = response.data.results[0].title;
    console.log(title);
  })
  .catch(err => {
    console.error('error:' + err);
  });
