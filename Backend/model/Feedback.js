const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    feedbackText: { type: String, required: true },
    category: { type: String, enum: ['Suggestion', 'Bug', 'Feature'], default: 'Suggestion' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
