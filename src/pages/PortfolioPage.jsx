import Project from "../components/Project";
import weatherdashboard from "../assets/WM-Weather-Dashboard-Los-Angeles.png"

const PortfolioPage = () => {
    return (
        <div>
            {/* Your portfolio page content here */}
            <Project
                name = {"Weather Dashboard"}
                live_url = {"https://wmason1997.github.io/WM-Weather-Dashboard/"}
                image_src = {weatherdashboard}
                repoUrl = {"https://github.com/wmason1997/WM-Weather-Dashboard"}
                repo = {"Github"}
            />
        
        </div>
    );
};

export default PortfolioPage;