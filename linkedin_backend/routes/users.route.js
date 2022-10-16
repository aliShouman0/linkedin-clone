const { Router } = require("express");
const {
  getUser,
  follow,
  isfollow,
  updateUser,
  getNotification
} = require("../controllers/users.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();

router.put("/", guard, updateUser);
//router.get("/getUser/:id", guard, getUser);
router.get("/getNotification", guard, getNotification);
router.post("/follow", guard, follow);
router.get("/isfollow/:company_id", guard, isfollow);

module.exports = router;
