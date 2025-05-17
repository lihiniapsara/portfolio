import { useState } from 'react';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

// App component - main entry point
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    // Function to change the current page
    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Navigation Bar */}
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

            {/* Main Content Area */}
            <main className="flex-grow container mx-auto p-6">
                {currentPage === 'home' && <HomePage />}
                {currentPage === 'projects' && <ProjectsPage />}
                {currentPage === 'about' && <AboutPage />}
                {currentPage === 'contact' && <ContactPage />}
            </main>

            {/* Footer */}
            <footer className="border-t border-purple-500 p-4 text-center text-gray-400">
                <div className="container mx-auto">
                    <p>&copy; 2025 Lihini Apsara Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;