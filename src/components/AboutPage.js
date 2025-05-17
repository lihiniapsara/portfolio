import React from 'react';

// AboutPage component
const AboutPage = () => {
    const skills = [
        { category: "Frontend", items: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "RESTful APIs"] },
        { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
        { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "JIRA"] }
    ];

    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">About Me</h2>

            <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/3">
                    <img
                        src="/api/placeholder/300/300"
                        alt="Lihini Apsara"
                        className="rounded-lg w-full border-2 border-purple-500"
                    />
                </div>
                <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Lihini Apsara</h3>
                    <p className="text-gray-300 mb-4">
                        I'm a passionate frontend developer with over 5 years of experience building web and mobile applications.
                        I specialize in creating responsive, accessible, and user-friendly interfaces that deliver exceptional user experiences.
                    </p>
                    <p className="text-gray-300 mb-4">
                        After completing my Computer Science degree, I worked with several startups and established tech companies,
                        helping them build innovative digital products that solve real-world problems.
                    </p>
                    <p className="text-gray-300">
                        When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen.
                    </p>
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">My Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-500">
                            <h4 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Education & Experience</h3>
                <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-purple-400">Senior Frontend Developer</h4>
                            <span className="text-sm text-gray-400">2021 - Present</span>
                        </div>
                        <p className="text-gray-200 mb-2">Tech Innovations Inc.</p>
                        <p className="text-gray-300">Leading frontend development team in building responsive web applications using React and TypeScript.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-purple-400">Frontend Developer</h4>
                            <span className="text-sm text-gray-400">2018 - 2021</span>
                        </div>
                        <p className="text-gray-200 mb-2">WebSolutions Studio</p>
                        <p className="text-gray-300">Developed and maintained multiple client websites using Vue.js and Nuxt.js frameworks.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-purple-400">BSc Computer Science</h4>
                            <span className="text-sm text-gray-400">2014 - 2018</span>
                        </div>
                        <p className="text-gray-200 mb-2">University of Technology</p>
                        <p className="text-gray-300">Graduated with honors. Specialized in web technologies and software engineering.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;