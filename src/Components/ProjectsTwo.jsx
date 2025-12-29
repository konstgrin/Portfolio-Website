import "../Styles/projects.css"
import { Project } from "./Projects"

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

const projects = [
    {
        'name': "Personal Visit-Card Website",
        'description': "Ja pidoras. Прям знаете, совсем нахуй конченный пидорас. А ещё я долбаёб и возможно пидор. Стоп, чё значит возможно, но вы поняли",
        'tags': ['react.js'],
        'href': 'https://www.youtube.com/watch?v=PkT0PJwy8mI'
    },
    {
        'name': "GOVNO 2.0",
        'description': "Ja pidoras. Прям знаете, совсем нахуй конченный пидорас. А ещё я долбаёб и возможно пидор. Стоп, чё значит возможно, но вы поняли",
        'tags': ['react.js', 'react.js', 'react.js'],
        'href': 'https://www.youtube.com/watch?v=PkT0PJwy8mI'
    }
]