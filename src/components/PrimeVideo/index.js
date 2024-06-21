import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  state = {acArray: [], comArray: []}

  componentDidMount() {
    this.getFilter()
  }

  getFilter = () => {
    const {moviesList} = this.props
    console.log(moviesList)
    const actionArray = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyArray = moviesList.filter(each => each.categoryId === 'COMEDY')
    this.setState({acArray: actionArray, comArray: comedyArray})
  }

  render() {
    const {acArray, comArray} = this.state
    console.log(acArray, comArray)
    return (
      <div className="ful">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          width="100%"
          height="200px"
          className="main"
        />
        <div className="bottom">
          <h2>Action Movies</h2>
          <MoviesSlider movies={acArray} />
          <h2>Comedy Movies</h2>
          <MoviesSlider movies={comArray} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
