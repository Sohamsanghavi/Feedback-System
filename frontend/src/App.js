import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedBackDashboard';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="container">
      <h1>User Feedback System</h1>

      <div className="tabs">
        <button
          className={activeTab === 'form' ? 'active' : ''}
          onClick={() => setActiveTab('form')}
        >
          Submit Feedback
        </button>
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Feedback Dashboard
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'form' && <FeedbackForm />}
        {activeTab === 'dashboard' && <FeedbackDashboard />}
      </div>
    </div>
  );
}

export default App;
