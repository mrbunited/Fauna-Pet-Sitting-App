const router = require("express").Router();
const appointmentRoutes = require("./appointments");
const customerRoutes = require("./customers");
const petSitterRoutes = require("./petSitters");

// Appointment routes
router.use("/appointments", appointmentRoutes);

// Customer routes
router.use("/customers", customerRoutes);

// Petsitter routes
router.use("/petSitters", petSitterRoutes);

module.exports = router;
