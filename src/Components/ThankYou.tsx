import { FaLeaf } from "react-icons/fa";
import ThemeSwitch from "./Portfolio/ThemeSwitch";

export default function ThankYou() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "3rem"
        }}>
            <div style={{ display: "none" }}>
                <ThemeSwitch />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <h1>THANK YOU</h1>
                <h6>I guess I'm dead by a moment you see it, but who really cares</h6>
                <h3>Thank you for being with me all this time. Wish you luck{"<3"}</h3>
            </div>
        </div>
    )
}