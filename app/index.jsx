import React from 'react';
import { ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MovieListItem from "../components/MovieListItem";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [movies, setMovies] = React.useState([])

  const fetchMovies = async () => {
    // const cachedResults = localStorage.getItem("home_list");
    // if (cachedResults) {
    //   setMovies(JSON.parse(cachedResults));
    //   return;
    // }
    // Make API call here
    const response = await fetch("https://movies.amhyou.com/list");
    const data = await response.json();
    console.log(data)
    setMovies(data.data.movies);
    // localStorage.setItem("home_list", JSON.stringify(data.data.movies));
  };


  async function searchMovies(search) {
    setSearchQuery(search)
    console.log(search, search.at(-1))
    if (search.at(-1) !== " " || search == undefined || search == " " || search == null) return

    // Make API call here
    const response = await fetch("https://movies.amhyou.com/search?query_term=" + search);
    const data = await response.json();
    console.log(data)
    if (data.data.movies) {
      setMovies(data.data.movies);
    }
  };

  React.useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={searchMovies}
        value={searchQuery}
      />
      {
        movies.length !== 0 ? movies.map((movie, index) => <MovieListItem key={index} movie={movie} />) : <ActivityIndicator animating={true} color={MD2Colors.blue400} size={"large"} style={{ marginTop: 10 }} />
      }

    </ScrollView>
  );
};