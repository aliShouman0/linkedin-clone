const { Router } = require("express");
const { getUser, follow } = require("../controllers/users.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();

//router.get("/", guard, getAllJobs);
router.get("/:id", guard, getUser);
router.post("/follow", guard, follow);
// router.post("/apply", guard, applyForJob);

module.exports = router;
