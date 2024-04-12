const chatServices = require("../services/chat.service");

const newChat = async (req, res) => {
  try {
    const newChatdata = req.body;
    const newChat = await chatServices.saveChat(newChatdata);

    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllChat = async (req, res) => {
  try {
    const allChats = await chatServices.getAll();
    res.status(200).json(allChats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { newChat, getAllChat };
