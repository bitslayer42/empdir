import axios from 'axios';

// Make a request for a user with a given ID
axios.get('http://localhost:3000/emps')
  .then(function (response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });