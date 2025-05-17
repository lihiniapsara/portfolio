import { useState } from 'react';

// ContactPage component with form validation
const ContactPage = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Error state
    const [errors, setErrors] = useState({});

    // Success state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Loading state
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (formData.name.trim().length > 100) {
            newErrors.name = 'Name must be less than 100 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        } else if (formData.subject.trim().length > 200) {
            newErrors.subject = 'Subject must be less than 200 characters';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        } else if (formData.message.trim().length > 1000) {
            newErrors.message = 'Message must be less than 1000 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                // Reset submission status after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Contact Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Get in Touch</h3>
                    <p className="text-gray-300 mb-6">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                            <div className="bg-purple-600 p-3 rounded-full mr-4">
                                <span className="text-white text-lg">📧</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-purple-300">Email</h4>
                                <p className="text-gray-300">apsaralihini11@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-purple-600 p-3 rounded-full mr-4">
                                <span className="text-white text-lg">📱</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-purple-300">Phone</h4>
                                <p className="text-gray-300">0786767329</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-purple-600 p-3 rounded-full mr-4">
                                <span className="text-white text-lg">📍</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-purple-300">Location</h4>
                                <p className="text-gray-300">Panadura, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-purple-300 mb-4">Connect with me</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition duration-300">
                                <span>🐦</span>
                            </a>
                            <a href="#" className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition duration-300">
                                <span>💼</span>
                            </a>
                            <a href="#" className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition duration-300">
                                <span>📸</span>
                            </a>
                            <a href="#" className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition duration-300">
                                <span>🐱</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
                    {isSubmitted ? (
                        <div className="bg-green-900 border border-green-700 text-green-100 p-4 rounded mb-6">
                            <p className="font-bold">Thank you for your message!</p>
                            <p>I'll get back to you as soon as possible.</p>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full p-3 rounded bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white focus:outline-none focus:border-purple-500`}
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                disabled={isSubmitting}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full p-3 rounded bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white focus:outline-none focus:border-purple-500`}
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                disabled={isSubmitting}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className={`w-full p-3 rounded bg-gray-700 border ${errors.subject ? 'border-red-500' : 'border-gray-600'} text-white focus:outline-none focus:border-purple-500`}
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What is this regarding?"
                                disabled={isSubmitting}
                            />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className={`w-full p-3 rounded bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white focus:outline-none focus:border-purple-500`}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                disabled={isSubmitting}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            <div className="text-right mt-1">
                <span className={`text-sm ${formData.message.length > 1000 ? 'text-red-500' : 'text-gray-400'}`}>
                  {formData.message.length}/1000
                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 flex justify-center items-center disabled:bg-purple-900 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="animate-spin mr-2">⟳</span>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;