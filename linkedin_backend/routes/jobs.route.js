const { Router } = require("express");
const {
  getAllJobs, 
  addJob,
  applyForJob,
  getApplicants,
  getApplicant
} = require("../controllers/main.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();

router.get("/", guard, getAllJobs);
router.get("/getApplicant/:id", guard, getApplicant);
router.post("/", guard, addJob);
router.post("/apply", guard, applyForJob);
router.get("/getApplicants", guard, getApplicants);

module.exports = router;
