import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  //_.applyMiddleware(handleVideoSearch(q));

  return (dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q}, (videos) => {
      dispatch(changeVideoList(videos));
      disptach(changeVideo(videos[0]));
    });
  };

};

export default handleVideoSearch;


//We could not use max = 5
//Did we need to include the import's type?