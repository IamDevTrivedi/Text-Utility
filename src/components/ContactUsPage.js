import React, { useState } from 'react';

const ContactUsPage = ({ darkMode, toggleDarkMode }) => {
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
        <div className={`max-w-4xl mx-auto p-6 mt-10 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg`}>
            <h1 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>Contact Us</h1>

            {/* Contact Information */}
            <div className="text-center mb-10">
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <strong>Email:</strong> someone@example.com
                </p>
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <strong>Phone:</strong> 123 45 789 0
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-8 rounded-lg shadow-lg max-w-2xl mx-auto`}>
                <div className="mb-6">
                    <label htmlFor="email" className={`block text-lg font-medium mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`outline-none focus:outline-none w-full p-3 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 text-black'} rounded-lg focus:outline-none  `}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className={`block text-lg font-medium mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 text-black'} rounded-lg focus:outline-none  `}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="issue" className={`block text-lg font-medium mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>Issue</label>
                    <textarea
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full p-3 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 text-black'} rounded-lg focus:outline-none  `}
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
