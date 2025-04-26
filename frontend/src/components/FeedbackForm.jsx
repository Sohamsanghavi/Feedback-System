import { useState } from 'react';
import { submitFeedback } from '../services/FeedBackServies';
import './FeedbackForm.css';

function FeedbackForm() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        feedbackText: '',
        category: 'Suggestion',
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitFeedback(formData);
            alert('Feedback submitted!');
            setFormData({ userName: '', email: '', feedbackText: '', category: 'Suggestion' });
        } catch (error) {
            console.error(error);
            alert('Failed to submit feedback');
        }
    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit}>
            <h2>Submit Feedback</h2>

            <label>Name</label>
            <input
                name="userName"
                placeholder="Your Name"
                value={formData.userName}
                onChange={handleChange}
                required
            />

            <label>Email</label>
            <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label>Feedback</label>
            <textarea
                name="feedbackText"
                placeholder="Your feedback here..."
                value={formData.feedbackText}
                onChange={handleChange}
                required
            />

            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
                <option>Suggestion</option>
                <option>Bug</option>
                <option>Feature</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm;
