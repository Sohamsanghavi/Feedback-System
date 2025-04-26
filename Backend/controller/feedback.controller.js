const Feedback = require('../model/Feedback');

exports.submitFeedback = async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFeedback = async (req, res) => {
    try {
        const { category, sortBy } = req.query;
        let query = {};
        if (category) query.category = category;
        let feedbacks = await Feedback.find(query).sort({ [sortBy || 'createdAt']: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
