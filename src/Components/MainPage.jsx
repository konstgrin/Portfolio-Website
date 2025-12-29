import '../Styles/mainPage.css'
import '../Fonts/Akrobat/style.css'
import '../Fonts/JetBrainsMono-2.304/fonts/style.css'

import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ProjectsTwo from './ProjectsTwo';
import Links from './Links';
import Spotify from './Spotify';
import Footer from './Footer';

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