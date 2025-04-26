const express = require('express');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/FeedbackRoute');
const cors = require('cors');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
