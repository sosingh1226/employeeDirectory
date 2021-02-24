import axios from  'axios'

export default {
    searchEmployee: function(query) {
      return axios.get(
        "https://randomuser.me/api/?&results=10"
      );
    }
  };
