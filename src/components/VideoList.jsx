//import
import VideoListEntry from './VideoListEntry.js';
//create a function that maps through the example data, calling video list entry to format it correctly

var VideoList = (props) => (
  <div className="video-list">
    <div><h5><em>{VideoListEntry(props[0])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[1])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[2])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[3])}</em> view goes here</h5></div>
    <div><h5><em>{VideoListEntry(props[4])}</em> view goes here</h5></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
