import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <SearchContainer />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer />
      </div>
      <div className="col-md-5">
        <VideoListContainer />
      </div>
    </div>
  </div>
);


// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     videos: [],
//   //     currentVideo: null
//   //   };

//   //   this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
//   // }

//   componentDidMount() {
//     //SearchContainer.handleSearchInputChange('react tutorials');
//     //<SearchContainer />;
//     <Provider store={store}>
//       <SearchContainer />
//     </Provider>;
//     //store.dispatch(handleVideoSearch('react tutorials'));
//   }

//   // handleVideoListEntryTitleClick(video) {
//   //   this.setState({currentVideo: video});
//   // }

//   getYouTubeVideos(query) {
//     var options = {
//       key: this.props.API_KEY,
//       query: query
//     };
//   }

//   //   this.props.searchYouTube(options, (videos) =>
//   //     this.setState({
//   //       videos: videos,
//   //       currentVideo: videos[0]
//   //     })
//   //   );
//   // }

//   //TODO: swap out the React components below for the container components
//   //  you wrote in the 'containers' directory.
//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 col-md-offset-3">
//             <Provider store={store}>
//               <SearchContainer />
//             </Provider>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <Provider store={store}>
//               <VideoPlayerContainer />
//             </Provider>
//           </div>
//           <div className="col-md-5">
//             <Provider store={store}>
//               <VideoListContainer />
//             </Provider>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;

//<div className="col-md-6 col-md-offset-3"></div>
//<Search getYouTubeVideos={this.getYouTubeVideos}/>

//<div className="col-md-7">
//<VideoPlayer video={this.state.currentVideo}/>

/* <div className="col-md-5">
<VideoList
  handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
  videos={this.state.videos}
/> */