const { Router } = require("express");
const {
  getAllJobs,
  getJob,
  addJob,
  applyForJob
} = require("../controllers/main.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();

router.get("/", guard, getAllJobs);
router.get("/:id", guard, getJob);
router.post("/", guard, addJob);
router.post("/apply", guard, applyForJob);


module.exports = router;
