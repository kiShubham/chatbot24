const router = require("express").Router();
const { newChat, getAllChat } = require("../controllers/chat.controller");

router.post("/", newChat);
router.get("/", getAllChat);

module.exports = router;
