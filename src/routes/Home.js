import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movie_count: 0,
    movies: []
  }

  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    const {
      data: {
        data: { movie_count },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies);
    this.setState({ movies, movie_count, isLoading: false });
    //console.log(this.state.movie_count);
  }

  componentDidMount() {
    // 영화 데이터 로딩 영역
    this.getMoives();

    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // }, 6000);
  }

  render() {
    const { isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading
          ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          )
          : (
            <div className="movies">
              {/* <div className="movie_count">MOVIE COUNT : {movie_count}</div> */}
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    )
  }
}

export default Home;