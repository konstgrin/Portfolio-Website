import { useEffect, useState } from "react";
import '../../Styles/themeSwitcher.css'

export default function ThemeSwitch() {
    // ☀️ | 🌙
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">(
        document.body.dataset.theme === "light" ? "light" : "dark"
    );
    
    const switchFunc = function() : void{
        if (currentTheme === 'dark') {
            document.body.dataset.theme = "light";
            setCurrentTheme('light');
        } else {
            document.body.dataset.theme = "dark";
            setCurrentTheme('dark');
        }
    }

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.dataset.theme = "dark";
            setCurrentTheme('dark');
        } else {
            document.body.dataset.theme = "light";
            setCurrentTheme('light');
        }

        const changeThemeDetect = function (event: MediaQueryListEvent): void{
            document.body.dataset.theme = event.matches ? "dark" : "light";
            setCurrentTheme(event.matches ? "dark" : "light");
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeThemeDetect);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeThemeDetect);
        }
    }, [])

    return (
        <div className="themeSwitcher" onClick={switchFunc}>
            {currentTheme === 'dark' ? '🌙' : '☀️'}
        </div>
    )
}