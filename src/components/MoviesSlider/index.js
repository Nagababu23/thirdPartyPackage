import Slider from 'react-slick'
import {Component} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {movies} = this.props
    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {movies.map(each => (
            <MovieItem details={each} id={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default MoviesSlider
