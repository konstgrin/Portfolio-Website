import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { TbPoint, TbPointFilled } from "react-icons/tb";

import "../Styles/projects.css"
import "../Styles/projectLink.css"
import LinkForProjects from "./LinkForProjects";
import { projects } from './projectsArray.ts';

function Tag({ name }) {
    const icon = (() => {
        switch (name) {
            case 'react.js':
                return <IoLogoReact size={19} color={"39D7F6"} />;
        }
    })()

    return (
        <div className="tag">
            {icon}
            <p className="tag-name">{ name }</p>
        </div>
    )
}

function Project({ data }) {
    let i = 0;
    return (
        <div className="project">
            <p className="project-name"><span className="blop" style={{top: "-2rem", background: "#00e1ff", width: "5rem", height: "5rem"}}></span>{data.name}</p>
            <div className="tags">
                {data.tags.map(tag => <Tag name={tag} key={i++}/>)}
            </div>
            <p className="project-description">{data.description}</p>
            <LinkForProjects link={data.href} />
        </div>
    )
}

export default function Projects() {
    const [index, setIndex] = useState(0);

    return (
        <div className="projects-container">
            <p className="headerText">Projects.jsx</p>
            <Project data={projects[index]} key={projects[index].name} />
            <div className="slider">
                <FaArrowLeft onClick={() => {
                    let newValue = index - 1;
                    if (newValue < 0) setIndex(projects.length - 1);
                    else setIndex(newValue);
                }} size={20} />

                <span className="idkreally">
                    {projects.map((data, i) => i === index ? <TbPointFilled size={15} key={i} /> : <TbPoint size={15} key={i} onClick={() => {
                        console.log(i + " was pressed")
                        setIndex(i);
                    }} />)}
                </span>

                <FaArrowRight onClick={() => {
                    let newValue = index + 1;
                    if (newValue === projects.length) setIndex(0);
                    else setIndex(newValue)
                }} size={20} />
            </div>
        </div>
    )
}


export {
    Project
};