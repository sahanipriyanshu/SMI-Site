import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            detail: '+1 (555) 123-4567',
            subtext: 'Mon-Fri 8:00 AM - 6:00 PM'
        },
        {
            icon: Mail,
            title: 'Email',
            detail: 'info@buildcraft.com',
            subtext: 'We respond within 24 hours'
        },
        {
            icon: MapPin,
            title: 'Address',
            detail: '123 Construction Ave',
            subtext: 'Building City, BC 12345'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            detail: 'Mon-Fri: 8:00 AM - 6:00 PM',
            subtext: 'Sat: 9:00 AM - 4:00 PM'
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Ready to start your next project? Let's discuss how we can bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                                        <Send className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <Send className="h-5 w-5" />
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-lg">
                                                    <info.icon className="h-6 w-6" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                                                <p className="text-blue-800 font-medium mb-1">{info.detail}</p>
                                                <p className="text-sm text-gray-600">{info.subtext}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-64 bg-gray-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                                        <p className="text-gray-600">Interactive Map</p>
                                        <p className="text-sm text-gray-500">123 Construction Ave, Building City</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;