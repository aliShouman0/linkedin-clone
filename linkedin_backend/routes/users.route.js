const { Router } = require("express");
const { getAllJobs,getJob,addJob,updateUser,deleteUser } = require("../controllers/main.controller");
const router = Router();

router.get("/", getAllJobs);

// router.get('/', getAllUsers);
 router.get('/:id', getJob);
 router.post('/', addJob);
 router.put('/', updateUser);
 router.delete('/', deleteUser);

module.exports = router;
