const { Router } = require("express");

const router = Router();

router.use(require("./categories.route"));
router.use(require("./requests.route"));
router.use(require("./medications.route"));
router.use(require("./admins.route"));

module.exports = router;
