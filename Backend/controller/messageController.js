import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }
  
  const { firstName, lastName, email, contact, message } = req.body;

  if ( !firstName || !firstName.trim() || !lastName || !lastName.trim() ||
    !email || !email.trim() || !contact || !String(contact).trim() || !message || !message.trim()) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  await Message.create({ firstName, lastName, email, contact, message });

  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});



export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});