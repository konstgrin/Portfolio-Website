import { FaGithub } from "react-icons/fa";

export default function LinkForProjects({ link }) {
    return (
        <div className="pr-link">
            <a href={link} className="pr-link-a">
                <FaGithub size={20} color={"black"} className="icon" />
                <span className="pr-link-name">Github</span>
            </a>
        </div>
    )
}