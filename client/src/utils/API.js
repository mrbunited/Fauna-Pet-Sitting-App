import axios from "axios";

export default {
  // Gets all petSitters
  getPetSitters: function() {
    return axios.get("/api/petSitters");
  },
  // Gets the petSitters with the given id
  getPetSitter: function(id) {
    return axios.get("/api/petSitters/" + id);
  },

  // Deletes the petSitter with the given id
  deletePetSitter: function(id) {
    return axios.delete("/api/petSitters/" + id);
  },
  // Saves a petSitter to the database
  savePetSitter: function(petSitterData) {
    return axios.post("/api/petSitters", petSitterData);
  },
  // Gets all customers
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  // Gets the customer with the given id
  getCustomer: function(id) {
    return axios.get("/api/customers/" + id);
  },
  // Deletes the customer with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/customers/" + id);
  },
  // Saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/customers", customerData);
  },
  // Gets all appointments
  getApppointments: function() {
    return axios.get("/api/appointments");
  },
  // Gets the appointment with the given id
  getAppointment: function(id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the appointment with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves an appointment to the database
  saveAppointment: function(appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  }
};
