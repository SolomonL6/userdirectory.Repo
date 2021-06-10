const axios = require ("axios")

export default {
    Users: function() {
        return axios.get("https://randomuser.me/api/?results=15&nat=us");
      } 
};
