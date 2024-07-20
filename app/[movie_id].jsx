import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import MovieDetail from "../components/MovieDetail";
import AppBar from '../components/AppBar';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Movie = () => {
  const [movie, setMovie] = React.useState()
  const [title, settitle] = React.useState("Movie Detail")
  const { movie_id } = useLocalSearchParams();
  const fetchMovie = async () => {
    // Make API call here
    const response1 = await fetch("https://movies.amhyou.com/detail?movie_id=" + movie_id);
    const data1 = await response1.json();
    console.log(data1)

    // Get summary
    const response2 = await fetch("https://movies.amhyou.com/plot?i=" + data1.data.movie.imdb_code);
    const data2 = await response2.json();
    console.log(data2)
    data1.data.movie.details = data2
    setMovie(data1.data.movie);
    settitle(data2.Genre + " by " + data2.Director + " (" + data2.Year + ") : " + data2.Runtime)
  };

  React.useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <ScrollView>
      <AppBar title={title} />
      {movie ? <MovieDetail movie={movie} /> : <ActivityIndicator animating={true} color={MD2Colors.blue400} size={"large"} style={{ marginTop: 10 }} />}
    </ScrollView>
  );
};

export default Movie;