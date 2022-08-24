import './VideoItem.css';


const VideoItem = (props)=>{

    // console.log(props.video.snippet.thumbnails.medium.url);
    return(
        <div onClick={()=>{props.onVideoSelect(props.video)}} className="video-item item">
        <img className="ui image" alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url}/>
        <div className="content">
            <div className="header">{props.video.snippet.title}</div>
        </div>
        </div>
    )
}

export default VideoItem;