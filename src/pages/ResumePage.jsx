const ResumePage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>responsive design</li>
                </ul>
            </div>
            <div>
                <p>Backend Proficiencies</p>
                <ul>
                    <li>MongoDB</li>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>GraphQL</li>
                    <li>REST</li>
                </ul>
            </div>
        </div>
    );
};

export default ResumePage;