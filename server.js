const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware
const userRoutes = require('./routes/userRoutes');
const computerRoutes = require('./routes/computerRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/itcrms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/computers', computerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
