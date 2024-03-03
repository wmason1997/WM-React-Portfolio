const ResumePage = () => {
    return (
        <div>
            {/* Your resume page content here */}
            <h1>Resume</h1>
                <p>Click the link below to download my resume:</p>
                <a href="http://localhost:3000/src/assets/William_Mason_Resume.pdf" download="http://localhost:3000/src/assets/William_Mason_Resume.pdf" >Download PDF</a> 
                {/* Will have to change it later to the address based on the deployed site's URL */}
            
                <br></br>
            <div>
                <p>Frontend Proficiencies</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div>
                <p>Backend Proficiencies</p>
                <ul>
                    <li>MongoDB</li>
                    <li>MongoDB</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    );
};

export default ResumePage;