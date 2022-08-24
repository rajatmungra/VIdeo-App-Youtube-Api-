

const VideoDetails = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="ui segment">
            <div className="ui embed">
                <iframe title="video player" src={url}/>
            </div>
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div >
    )
}

export default VideoDetails;