import * as React from 'react';
import { ScrollView } from 'react-native';
import MovieDetail from "../../components/MovieDetail";
import AppBar from '../../components/AppBar';


const Movie = () => {

  const fetchMovie = async () => {
    // Make API call here
    const response = await fetch("https://movies.amhyou.com/detail?movie_id=");
    const data = await response.json();
    console.log(data)
    setMovies(data.data.movies);
  };

  React.useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <ScrollView>
      <AppBar />
      <MovieDetail />
    </ScrollView>
  );
};

export default Movie;