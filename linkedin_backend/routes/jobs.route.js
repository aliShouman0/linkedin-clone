const { Router } = require("express");
const {
  getAllJobs,
  getJob,
  addJob,
} = require("../controllers/main.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();
 
router.get("/", guard, getAllJobs);
router.get("/:id", guard, getJob);
router.post("/", guard, addJob);

//router.put("/", updateUser);
//router.delete("/", deleteUser);

module.exports = router;
