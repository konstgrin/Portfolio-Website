import "../Styles/projects.css"
import { Project } from "./Projects.jsx"
import { projects } from './projectsArray.ts';

export default function ProjectsTwo() {
    return (
        <div className="projects-container-two">
            <p className="headerText">Projects.jsx</p>
            {projects.map((data) =>
                <Project data={data} key={data.name + "2"} />
            )}
        </div>
    )
}