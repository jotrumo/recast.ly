//import
import VideoListEntry from './VideoListEntry.js';
//create a function that maps through the example data, calling video list entry to format it correctly

var VideoList = (props) =>{
  //console.log(props)
  return (
    <div className="video-list">
      {props.videos.map((video, index) =>
        <VideoListEntry
          key={video + index}
          video={video}
          onVideoClick={props.onVideoClick}
        />
      )}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
