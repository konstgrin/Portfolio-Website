import { FaGithub } from "react-icons/fa";

type linkProp = {
    link: string;
}

export default function LinkForProjects({ link }: linkProp) {
    return (
        <div className="pr-link">
            <a href={link} className="pr-link-a">
                <FaGithub size={20} color={"black"} className="icon" />
                <span className="pr-link-name">Github</span>
            </a>
        </div>
    )
}