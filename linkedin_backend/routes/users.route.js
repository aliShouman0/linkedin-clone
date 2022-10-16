const { Router } = require("express");
const {
  getUser
} = require("../controllers/users.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();

//router.get("/", guard, getAllJobs);
router.get("/:id", guard, getUser);
// router.post("/", guard, addJob);
// router.post("/apply", guard, applyForJob);


module.exports = router;
