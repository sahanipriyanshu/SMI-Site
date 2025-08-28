import React from 'react';
import { Calendar, MapPin, User, CheckCircle, Clock, Award } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Modern Corporate Headquarters',
            category: 'Commercial',
            image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'A 15-story glass and steel corporate headquarters featuring sustainable design elements and modern workspace solutions.',
            client: 'TechCorp Inc.',
            year: '2024',
            location: 'Downtown City Center'
        },
        {
            id: 2,
            title: 'Luxury Residential Complex',
            category: 'Residential',
            image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'High-end residential complex with 50 luxury units, featuring premium finishes and state-of-the-art amenities.',
            client: 'Prestige Living',
            year: '2023',
            location: 'Riverside District'
        },
        {
            id: 3,
            title: 'Contemporary Art Museum',
            category: 'Cultural',
            image: 'https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'Innovative museum design with flexible gallery spaces and natural lighting integration.',
            client: 'City Art Foundation',
            year: '2023',
            location: 'Cultural Quarter'
        },
        {
            id: 4,
            title: 'Sustainable Office Complex',
            category: 'Commercial',
            image: 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'LEED-certified office building with green roof systems and energy-efficient design.',
            client: 'Green Solutions Ltd.',
            year: '2022',
            location: 'Business Park'
        },
        {
            id: 5,
            title: 'Boutique Hotel Renovation',
            category: 'Hospitality',
            image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'Complete renovation of historic building into a modern boutique hotel with preserved architectural character.',
            client: 'Heritage Hotels',
            year: '2022',
            location: 'Historic District'
        },
        {
            id: 6,
            title: 'Private Villa Estate',
            category: 'Residential',
            image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            description: 'Luxury private villa with infinity pool, smart home integration, and panoramic city views.',
            client: 'Private Client',
            year: '2024',
            location: 'Hillside Heights'
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore our portfolio of exceptional construction, architecture, and design projects
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="inline-block px-3 py-1 bg-yellow-500 text-gray-900 text-sm font-medium rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <User className="h-4 w-4" />
                                            <span>{project.client}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{project.year}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{project.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose BuildCraft</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our commitment to excellence drives everything we do
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-lg mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                                <CheckCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We never compromise on quality, using premium materials and expert craftsmanship in every project.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-lg mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                                <Clock className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">On-Time Delivery</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We pride ourselves on meeting deadlines and delivering projects on schedule, every time.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-lg mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                                <Award className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Award-Winning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our innovative designs and construction excellence have earned industry recognition and awards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;