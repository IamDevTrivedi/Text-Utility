
import React, { useState } from 'react';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        issue: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        alert('Form Submitted Successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Contact Us</h1>

            {/* Contact Information */}
            <div className="text-center mb-10">
                <p className="text-xl text-gray-700">
                    <strong>Email:</strong> someone@example.com
                </p>
                <p className="text-xl text-gray-700">
                    <strong>Phone:</strong> 123 45 789 0
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-blue-50 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <div className="mb-6">
                    <label htmlFor="email" className="block text-lg font-medium text-blue-800 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className="block text-lg font-medium text-blue-800 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="issue" className="block text-lg font-medium text-blue-800 mb-2">Issue</label>
                    <textarea
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactUsPage;
