import Project from "../components/Project";
import weatherdashboard from "../assets/WM-Weather-Dashboard-Los-Angeles.png"
// Add images for projects 2-6

const PortfolioPage = () => {
    return (
        <div>
            {/* Project 1: Weather Dashboard */}
            <Project
                name = {"Weather Dashboard"}
                live_url = {"https://wmason1997.github.io/WM-Weather-Dashboard/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/WM-Weather-Dashboard"}
                repo = {"Github"}
            />
            {/* Project 2: J.A.T.E. */}
            <Project
                name = {"Just Another Text Editor"}
                live_url = {"https://wm-pwa-text-editor.onrender.com/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/WM-PWA-Text-Editor"}
                repo = {"WM-PWA-Text-Editor"}
            />
            {/* Project 3: Day Planner */}
            <Project
                name = {"Work Day Scheduler"}
                live_url = {"https://wmason1997.github.io/WM-Calendar-Application/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/WM-Calendar-Application"}
                repo = {"WM-Calendar-Application"}
            />
            {/* Project 4: Password Generator */}
            <Project
                name = {"Password Generator"}
                live_url = {"https://wmason1997.github.io/WM-Password-Generator/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/WM-Password-Generator"}
                repo = {"WM-Password-Generator"}
            />
            {/* Project 5: Taiga */}
            <Project
                name = {"Taiga"}
                live_url = {"https://immense-tor-19935-d43f1bf06a0b.herokuapp.com/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/Eco-Friendly-Marketplace"}
                repo = {"Eco-Friendly-Marketplace"}
            />
            {/* Project 6: Tunes and Brews */}
            <Project
                name = {"Tunes and Brews"}
                live_url = {"https://wmason1997.github.io/Upcoming-Concert-Brewery-Locator/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/Upcoming-Concert-Brewery-Locator"}
                repo = {"Upcoming Concert Brewery Locator"}
            />
        
        </div>
    );
};

export default PortfolioPage;