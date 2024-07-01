// src/controllers/transactions.js
const Transaction = require('../models/Transaction');
const User = require('../models/User');

exports.createTransaction = async (req, res) => {
  const { receiverBarcode, amount } = req.body;
  const senderId = req.user.id;

  try {
    const receiver = await User.findOne({ barcode: receiverBarcode });
    if (!receiver) {
      return res.status(400).json({ msg: 'Receiver not found' });
    }

    const transaction = new Transaction({
      senderId,
      receiverId: receiver.id,
      amount,
      status: 'Pending'
    });

    await transaction.save();
    res.json(transaction);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
