const { Router } = require("express");
const {
  medicationsController,
} = require("../controllers/medications.controller");

const router = Router();

router.post("/selectors", medicationsController.createMedication);
router.get("/selectors", medicationsController.getAllMedications);
router.get("/selectors/:id", medicationsController.getMedication);
router.delete("/selectors/:id", medicationsController.removeMedication);
router.get(
  "/selectors/selectors/:id",
  medicationsController.getMedicationsByCategory
);
router.post("/selectors/:id", medicationsController.addImageForMedication);

module.exports = router;
