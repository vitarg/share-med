const { Router } = require("express");

const router = Router();

router.use(require("./categories.route"));

module.exports = router;
