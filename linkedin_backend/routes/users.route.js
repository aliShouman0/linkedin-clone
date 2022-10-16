const { Router } = require("express");
const {
  getUser,
  follow,
  isfollow,
  updateUser,
} = require("../controllers/users.controller");
const guard = require("../middlewares/auth.middleware");
const router = Router();

router.post("/", guard, updateUser);
router.get("/:id", guard, getUser);
router.post("/follow", guard, follow);
router.get("/isfollow/:company_id", guard, isfollow);

module.exports = router;
