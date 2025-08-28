import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, PaintBucket, Ruler } from 'lucide-react';

const Home = () => {
    const services = [
        {
            icon: Building,
            title: 'Construction',
            description: 'Premium construction services with attention to detail and quality craftsmanship.'
        },
        {
            icon: Ruler,
            title: 'Architecture',
            description: 'Innovative architectural designs that blend functionality with aesthetic appeal.'
        },
        {
            icon: PaintBucket,
            title: 'Interior Design',
            description: 'Sophisticated interior solutions that transform spaces into exceptional environments.'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                    style={{
                        backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
                    }}
                ></div>
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Building Excellence,<br />
                            <span className="text-yellow-500">Crafting Dreams</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Premier construction, architecture, and interior design services that transform visions into reality
                        </p>
                        <Link
                            to="/projects"
                            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            View Our Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive solutions for all your construction and design needs
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-lg mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can bring your construction and design vision to life
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get In Touch
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;