

function Project(props) { //name, live_url, image_src, repo
    return(
        <div>
            <p>{props.name}</p>
            <a href={props.live_url}><img src = {props.image_src}></img></a>
            <a href={props.repoUrl}>
            <p>{props.repo}</p>
            </a>
        </div>
    )
}

export default Project;