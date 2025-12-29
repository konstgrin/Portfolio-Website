import "../Styles/links.css"
import { FaSpotify, FaGithub, FaDiscord } from "react-icons/fa";

function Link({ href, name, icon }) {
    return (
        <div className="link">
            <a href={href} className="link-a">
                {icon}
                <span className="link-name">{name}</span>
            </a>
        </div>
    )
}

export default function Links(){
    const github = "https://github.com/konstgrin";
    const spotify = "https://open.spotify.com/user/59elotyeki830jfqfrcndwkw8?si=df459ad2f0494bca";
    const discord = "https://discord.com/users/491257209427329024";
    
    return (
        <div className="links-container">
            <p className="headerText"><span className="blop" style={{top: "-2rem", background: "#fbff00ff", width: "5.3rem", height: "5.3rem"}}></span>Links.jsx</p>
            <div className="links">
                <Link href={github} name={"Github"} icon={<FaGithub size={25} color={"black"} className="icon" />} />
                <Link href={discord} name={"Discord"} icon={<FaDiscord size={25} color={"538CFF"} className="icon" />} />
                <Link href={spotify} name={"Spotify"} icon={<FaSpotify size={25} color={"2CEF80"} className="icon" />} />
            </div>
        </div>
    )
}

export {Link};