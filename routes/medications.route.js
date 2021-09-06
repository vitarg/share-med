const { Router } = require("express");
const {
  medicationsController,
} = require("../controllers/medications.controller");

const router = Router();

router.post("/medications", medicationsController.createMedication);
router.get("/medications", medicationsController.getAllMedications);
router.get("/medications/:id", medicationsController.getMedication);
router.delete("/medications/:id", medicationsController.removeMedication);
router.get(
  "/medications/categories/:id",
  medicationsController.getMedicationsByCategory
);

module.exports = router;
