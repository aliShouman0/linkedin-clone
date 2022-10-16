const { Router } = require("express");
const {
  getAllJobs,
  getJob,
  addJob, 
} = require("../controllers/main.controller");
const router = Router();

router.get("/", getAllJobs);
router.get("/:id", getJob);
router.post("/", addJob);

//router.put("/", updateUser);
//router.delete("/", deleteUser);


module.exports = router;
