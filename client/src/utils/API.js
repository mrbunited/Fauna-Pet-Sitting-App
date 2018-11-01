import axios from "axios";

export default {
  // Gets all books
  getPetSitter: function() {
    return axios.get("/api/petsitters");
  },
  // Gets the book with the given id
  getPetSitterId: function(id) {
    return axios.get("/api/petsitters/" + id);
  },
  // Deletes the book with the given id
  deletePetSitter: function(id) {
    return axios.delete("/api/petsitters/" + id);
  }
};
