import '../Styles/mainPage.css'

import '../Fonts/Akrobat/style.css'
import '../Fonts/JetBrainsMono-2.304/fonts/style.css'

import AboutMe from './AboutMe.tsx';
import Skills from './Skills.tsx';
import Projects from './Projects.tsx';
import ProjectsTwo from './ProjectsTwo.tsx';
import Links from './Links.js';
// import Spotify from './Spotify.jsx';
import Footer from './Footer.tsx';

export default function MainPage() {
    return (
        <div className="center">
            <div className="grid-container">
                <AboutMe />
                <Skills />
                <Projects />
                <ProjectsTwo />
                <Links />
                <Footer />
            </div>
        </div>
    );
}