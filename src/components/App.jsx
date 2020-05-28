import VideoList from './VideoList.js';
//import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.searchYouTube);
    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    this.getVideos('react tutorials');
  }


  getVideos(query) {
    var options = {
      key: this.props.APIKey,
      query: query
    };


    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInput={this.getVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer
              video={this.state.currentVideo}
            />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              onVideoClick={this.onVideoClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
