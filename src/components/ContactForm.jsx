import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      access_key: 'b4eef677-52d6-4c41-8453-8084bbf7b157',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('✅ Message sent successfully!');
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('❌ An error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="name"
              placeholder="Name *"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="email"
              placeholder="Email *"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="mt-3 text-center">{status}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}
