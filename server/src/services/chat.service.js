const Chats = require("../models/chat.model");

const saveChat = async (data) => {
  try {
    const chat = await Chats.create(data);
    return chat;
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    const fetch = await Chats.find();
    return fetch;
  } catch (error) {
    throw error;
  }
};

module.exports = { saveChat, getAll };
