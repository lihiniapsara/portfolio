import React from 'react';

// HomePage component
const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="text-purple-400">Hello, I'm Lihini Apsara</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                A passionate frontend developer creating beautiful, responsive web experiences.
            </p>
            <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-500 w-full md:w-64">
                        <h3 className="text-xl font-bold mb-2 text-purple-400">Web Development</h3>
                        <p className="text-gray-300">Creating responsive and interactive web applications using modern frameworks.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-500 w-full md:w-64">
                        <h3 className="text-xl font-bold mb-2 text-purple-400">UI/UX Design</h3>
                        <p className="text-gray-300">Designing intuitive user interfaces that provide exceptional user experiences.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-500 w-full md:w-64">
                        <h3 className="text-xl font-bold mb-2 text-purple-400">Mobile Development</h3>
                        <p className="text-gray-300">Building cross-platform mobile applications for iOS and Android devices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;