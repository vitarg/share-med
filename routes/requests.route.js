const { Router } = require("express");
const { requestsController } = require("../controllers/requests.controller");

const router = Router();

router.post("/selectors/:medicationId", requestsController.addRequest);
router.get(
  "/selectors/:medicationId",
  requestsController.getRequestByMedication
);
router.patch("/selectors/:id/accept", requestsController.acceptRequest);

module.exports = router;
