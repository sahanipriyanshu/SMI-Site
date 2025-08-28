import React from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';

function About() {
    const stats = [
        { icon: Award, number: '15+', label: 'Years Experience' },
        { icon: CheckCircle, number: '200+', label: 'Projects Completed' },
        { icon: Users, number: '50+', label: 'Happy Clients' },
        { icon: Clock, number: '24/7', label: 'Support Available' }
    ];

    const team = [
        {
            name: 'Sarah Mitchell',
            role: 'Founder & Lead Architect',
            image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            description: 'Award-winning architect with over 15 years of experience in sustainable design.'
        },
        {
            name: 'Michael Rodriguez',
            role: 'Construction Manager',
            image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            description: 'Expert in project management and quality control with exceptional attention to detail.'
        },
        {
            name: 'Emily Chen',
            role: 'Interior Design Director',
            image: 'https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            description: 'Creative visionary specializing in modern and timeless interior design solutions.'
        },
        {
            name: 'David Thompson',
            role: 'Senior Project Engineer',
            image: 'https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            description: 'Structural engineering expert ensuring safety and innovation in every project.'
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About BuildCraft</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            For over 15 years, BuildCraft has been at the forefront of construction innovation, 
                            delivering exceptional projects that exceed expectations and stand the test of time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="h-6 w-6 text-gray-900" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-blue-200 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that exceptional construction goes beyond mere building—it's about creating 
                                spaces that inspire, function seamlessly, and enhance the lives of those who inhabit them.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our integrated approach combines cutting-edge construction techniques, innovative 
                                architectural design, and sophisticated interior solutions to deliver projects that 
                                are both beautiful and built to last.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                                alt="Construction team at work"
                                className="rounded-lg shadow-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experienced professionals dedicated to bringing your vision to life
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;