import './Project.css';

function Project(props) {
    return (
        <div className="project-card">
            <h3>{props.name}</h3>
            <a href={props.live_url} target='_blank' rel='noopener noreferrer'>
                <img src={props.image_src} alt={props.name} className='project-image' />
            </a>
            <p className="repo-link">
                <a href={props.repoUrl} target='_blank' rel='noopener noreferrer'>
                    {props.repo}
                </a>
            </p>
        </div>
    );
}

export default Project;
