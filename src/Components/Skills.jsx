import "../Styles/skills.css"
import { IoLogoReact, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

function Logo({ data }) {
    return (
        <div className="logo-and-name">
            {data.logo}
            <p className="skill-name">{data.name}</p>
        </div>
    )
}

export default function Skills(){
    return (
        <div className="skills-container">
            <p className="headerText">Skills.jsx</p>
            {skillsArray.map((category) => (
                <div className="skills-category" key={category.name}>
                    <p className="category">{category.name}</p>
                    <div className="blop"></div>
                    <div className="skills-list">
                        {category.list.map((data) =>
                            <Logo data={data} key={data.name} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

const skillsArray = [
    {
        name: 'Frontend',
        list: [{ name: "React", logo: <IoLogoReact size={70} color={"39D7F6"}/> }, { name: "JavaScript", logo: < IoLogoJavascript size={70} color={"F2F924"} /> }, { name: "HTML", logo: <IoLogoHtml5 size={70} color={"FF2E2E"} /> }, {name: "CSS", logo: <IoLogoCss3 size={70} color={"39D7F6"} /> }]
    },
    {
        name: 'In progress',
        list: [{ name: "Typescript", logo: <BiLogoTypescript size={70} color={"#0db2ffff"}/> }]
    },
]