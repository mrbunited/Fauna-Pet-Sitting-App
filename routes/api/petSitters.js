const router = require("express").Router();
const petSittersController = require("../../controllers/petSittersController");

// Matches with "/api/petSitters"
router.route("/")
  .get(petSittersController.findAll)
  .post(petSittersController.create);

// Matches with "/api/petSitters/:id"
router
  .route("/:id")
  .get(petSittersController.findById)
  .put(petSittersController.update)
  .delete(petSittersController.remove);

module.exports = router;