import React from 'react';

// ProjectsPage component
const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-featured online store with shopping cart, payment processing, and user authentication.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/api/placeholder/400/250"
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "Real-time weather forecasting application with geolocation and interactive maps.",
            technologies: ["JavaScript", "Weather API", "Leaflet.js", "CSS3"],
            image: "/api/placeholder/400/250"
        },
        {
            id: 3,
            title: "Task Management System",
            description: "Collaborative task management tool with real-time updates and team collaboration features.",
            technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
            image: "/api/placeholder/400/250"
        },
        {
            id: 4,
            title: "Fitness Tracker",
            description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
            technologies: ["React Native", "GraphQL", "AWS", "TypeScript"],
            image: "/api/placeholder/400/250"
        }
    ];

    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                    <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-500">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                    {tech}
                  </span>
                                ))}
                            </div>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;