import React from 'react';

// Navigation component
const Navigation = ({ currentPage, navigateTo }) => {
    return (
        <nav className="border-b border-purple-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-purple-400 cursor-pointer" onClick={() => navigateTo('home')}>
                    Lihini Apsara
                </div>
                <div className="flex space-x-6">
                    <button
                        onClick={() => navigateTo('projects')}
                        className={`transition duration-300 ${currentPage === 'projects' ? 'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'}`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => navigateTo('about')}
                        className={`transition duration-300 ${currentPage === 'about' ? 'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'}`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => navigateTo('contact')}
                        className={`transition duration-300 ${currentPage === 'contact' ? 'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'}`}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;