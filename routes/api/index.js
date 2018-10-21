const router = require("express").Router();
<<<<<<< HEAD
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
=======
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
>>>>>>> 7d47179175a65bd899306470d54bc98eb4e376f7
