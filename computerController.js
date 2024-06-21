const Computer = require('../models/Computer');
const Booking = require('../models/Booking');

exports.getAllComputers = async (req, res) => {
  try {
    const computers = await Computer.find();
    res.json(computers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.bookComputer = async (req, res) => {
  const { userId, computerId, startTime, endTime } = req.body;

  try {
    const booking = new Booking({ user: userId, computer: computerId, startTime, endTime });
    await booking.save();

    await Computer.findByIdAndUpdate(computerId, { status: 'occupied' });

    res.status(201).json({ message: 'Computer booked successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
