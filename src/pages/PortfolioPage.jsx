import Project from "../components/Project";

// Add images for projects 1-6
import weatherdashboard from "../assets/Weather_Dashboard_Gif.webp";
import jatePic from "../assets/Text_Editor_Gif.gif";
import dailyScheduler from "../assets/Daily_Scheduler_Gif.gif";
import passwordGenerator from "../assets/Password_Generator_Icon.gif";
import greenPlanet from "../assets/Eco_Commerce_Gif.gif";
import tunesBrews from "../assets/Tunes-And-Brews-Gif.gif";

const PortfolioPage = () => {
    return (
        <div>
            {/* Project 1: Weather Dashboard */}
            <Project
                name = {"Weather Dashboard"}
                live_url = {"https://wmason1997.github.io/WM-Weather-Dashboard/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/WM-Weather-Dashboard"}
                repo = {"WM-Weather-Dashboard"}
            />
            {/* Project 2: J.A.T.E. */}
            <Project
                name = {"Just Another Text Editor"}
                live_url = {"https://wm-pwa-text-editor.onrender.com/"}
                image_src = {jatePic}
                repoUrl = {"https://github.com/wmason1997/WM-PWA-Text-Editor"}
                repo = {"WM-PWA-Text-Editor"}
            />
            {/* Project 3: Day Planner */}
            <Project
                name = {"Work Day Scheduler"}
                live_url = {"https://wmason1997.github.io/WM-Calendar-Application/"}
                image_src = {dailyScheduler}
                repoUrl = {"https://github.com/wmason1997/WM-Calendar-Application"}
                repo = {"WM-Calendar-Application"}
            />
            {/* Project 4: Password Generator */}
            <Project
                name = {"Password Generator"}
                live_url = {"https://wmason1997.github.io/WM-Password-Generator/"}
                image_src = {passwordGenerator}
                repoUrl = {"https://github.com/wmason1997/WM-Password-Generator"}
                repo = {"WM-Password-Generator"}
            />
            {/* Project 5: Taiga */}
            <Project
                name = {"Taiga"}
                live_url = {"https://immense-tor-19935-d43f1bf06a0b.herokuapp.com/"}
                image_src = {greenPlanet}
                repoUrl = {"https://github.com/wmason1997/Eco-Friendly-Marketplace"}
                repo = {"Eco-Friendly-Marketplace"}
            />
            {/* Project 6: Tunes and Brews */}
            <Project
                name = {"Tunes and Brews"}
                live_url = {"https://wmason1997.github.io/Upcoming-Concert-Brewery-Locator/"}
                image_src = {tunesBrews}
                repoUrl = {"https://github.com/wmason1997/Upcoming-Concert-Brewery-Locator"}
                repo = {"Upcoming Concert Brewery Locator"}
            />
        
        </div>
    );
};

export default PortfolioPage;