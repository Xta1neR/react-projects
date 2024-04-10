// Form.js

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = validateForm(formData);
    setFormErrors(errors);
    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
      // Show success message
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  // Form validation function
  const validateForm = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = 'Name is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && <span>{formErrors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
