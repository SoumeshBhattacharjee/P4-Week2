import express from 'express';
import {
  registerControllers,
  loginControllers,
  setAvatarController,
  allUsers,
} from '../controllers/userController.js';

const router = express.Router();

router.route("/register").post(registerControllers);
router.route("/login").post(loginControllers);
router.route("/setAvatar/:id").post(setAvatarController);
router.route("/allUsers/:id").get(allUsers);

export default router;