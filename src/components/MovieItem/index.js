import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {Component} from 'react'
import './index.css'

class MovieItem extends Component {
  render() {
    const {details} = this.props
    const {thumbnailUrl, videoUrl, title} = details
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              <img src={thumbnailUrl} alt={title} />
            </button>
          }
        >
          <div className="video-container">
            <ReactPlayer url={videoUrl} />
          </div>
        </Popup>
      </div>
    )
  }
}

export default MovieItem
