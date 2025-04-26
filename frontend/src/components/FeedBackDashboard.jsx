import { useEffect, useState } from 'react';
import { fetchFeedback } from '../services/FeedBackServies';
import './FeedbackDashboard.css';

function FeedbackDashboard() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('createdAt');

    useEffect(() => {
        loadFeedback();
    }, [filter, sortBy]);

    const loadFeedback = async () => {
        const res = await fetchFeedback({ category: filter, sortBy });
        setFeedbacks(res.data);
    };

    return (
        <div className="feedback-dashboard">
            <h2>Feedback Dashboard</h2>

            <div className="controls">
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="">All Categories</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Bug">Bug</option>
                    <option value="Feature">Feature</option>
                </select>

                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="createdAt">Newest</option>
                    <option value="userName">Name</option>
                </select>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Feedback</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((fb) => (
                        <tr key={fb._id}>
                            <td>{fb.userName}</td>
                            <td>{fb.email}</td>
                            <td>{fb.category}</td>
                            <td>{fb.feedbackText}</td>
                            <td>{new Date(fb.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FeedbackDashboard;
