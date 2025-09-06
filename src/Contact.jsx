import React, { useState } from 'react';

function Contact() {
    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to hold validation errors
    const [errors, setErrors] = useState({});
    
    // State to track form submission success
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    // Function to validate the form data
    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid.";
        }
        if (!formData.message) tempErrors.message = "Message is required.";
        setErrors(tempErrors);
        // Returns true if there are no errors, false otherwise
        return Object.keys(tempErrors).length === 0;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (validate()) {
            console.log("Form Submitted:", formData);
            // Here you would typically send the data to a server or API
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Clear the form
            // Hide success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };

    return (
        <>
          {/* Since a separate CSS file is not available, styles are included here */}
          <style>{`
            .content-section {
              padding: 4rem 2rem;
              max-width: 800px;
              margin: 0 auto;
              text-align: center;
            }
            .contact-form {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              text-align: left;
            }
            .form-group {
              display: flex;
              flex-direction: column;
            }
            .form-group label {
              margin-bottom: 0.5rem;
              font-weight: bold;
            }
            .form-group input, .form-group textarea {
              padding: 0.8rem;
              border: 1px solid #ccc;
              border-radius: 5px;
              font-size: 1rem;
            }
            .form-group input:focus, .form-group textarea:focus {
              outline: none;
              border-color: #007bff;
              box-shadow: 0 0 5px rgba(0,123,255,0.5);
            }
            .error-message {
              color: #dc3545;
              font-size: 0.875rem;
              margin-top: 0.25rem;
            }
            .submit-button {
              background-color: #007bff;
              color: white;
              padding: 1rem 2rem;
              border-radius: 5px;
              text-decoration: none;
              font-weight: bold;
              transition: background-color 0.3s;
              border: none;
              cursor: pointer;
              font-size: 1rem;
            }
            .submit-button:hover {
              background-color: #0056b3;
            }
            .success-message {
                color: #28a745;
                background-color: #e9f7ef;
                padding: 1rem;
                border-radius: 5px;
                text-align: center;
                margin-top: 1rem;
            }
          `}</style>

          <section id="contact" className="content-section">
            <h2>Message Me</h2>
            
            {/* Display success message if form was submitted successfully */}
            {isSubmitted && <div className="success-message">Thank you for your message! I'll get back to you soon.</div>}

            <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>
        </>
    );
}

export default Contact;