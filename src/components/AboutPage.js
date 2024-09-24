
import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <strong>Text Tools</strong> - a simple and efficient way to manipulate and analyze text!
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This web application provides users with various tools to work with text, allowing you to perform different
        transformations like converting between upper/lower cases, sentence/title cases, and even reversing text.
        Additionally, you can easily generate word statistics such as word count, reading time, average word length,
        sentence length, and more.
      </p>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Features:</h2>
      <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
        <li>Convert text to UPPERCASE, lowercase, Title Case, Sentence Case.</li>
        <li>Get quick word and character statistics, including reading and speaking time estimates.</li>
        <li>Preview the manipulated text instantly.</li>
        <li>Clear, copy, or speak out your text easily with one click.</li>
      </ul>
      <p className="text-lg text-gray-700">
        Our goal is to simplify the process of working with text, offering you an easy-to-use tool for everyday tasks.
        Thank you for using Text Tools!
      </p>
    </div>
  );
};

export default AboutPage;
