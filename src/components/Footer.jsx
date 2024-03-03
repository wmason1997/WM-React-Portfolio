import './Footer.css'; // Import the CSS stylings to get the items to flex horizontally

// Import the profile icons
import githubIcon from "../assets/GitHub_Icon.png";
import linkedinIcon from "../assets/LinkedIn_Icon.png";
import stravaIcon from "../assets/Strava_Icon.png";


function Footer() {
    return(
        <footer>
            {/* Fill in with links and content */}
            <a href="https://github.com/wmason1997" target="_blank" rel="noopener noreferrer" className="footer-item">
                <img src={githubIcon} alt="GitHub icon" />
            </a>

            <a href="https://www.linkedin.com/in/willmason97/" target="_blank" rel="noopener noreferrer" className="footer-item">
                <img src={linkedinIcon} alt="Icon 2" />
            </a>

            <a href="https://www.strava.com/athletes/113680112?utm_source=ios_share&utm_medium=social&share_sig=9C2B83941709484327&fbclid=IwAR2hP4mRgy2ANtK6H2IAt_J2IzJAuk3YDysZVev-0urHTe-0m0Q_Z5ZF8MU&_branch_match_id=1221205781436726064&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy4pSixL1EssKNDLyczL1rdMLytL93OqdPNIsk9LSs7JTLH1LHcMMsoIMMkNSq80cvQr8TbzMPJ0LIn3MvKs8nIszTaOdKksjgpLLdM1KC3yCEnVNcg1CIyPMo1ys%2FANBQDSWMh4aAAAAA%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-item">
                <img src={stravaIcon} alt="Icon 3" />
            </a>            
        </footer>
    )
}

export default Footer;