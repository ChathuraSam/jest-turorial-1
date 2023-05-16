const axios = require("axios");

const functions = {
  add: (num1, num2) => {
    return(num1 + num2);
  },

  isNull: () => {
    return null
  },

  checkValue: (x) =>{
    return x;
  },

  createUser: () => {
    const user = {
      firstName: 'Chathura',
      lastName: 'Samarajeewa'
    }
    return user;
  },

  fetchUsers: async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    return response.data;
  },
}

module.exports = functions;