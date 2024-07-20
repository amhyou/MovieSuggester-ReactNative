import { Card, Text } from 'react-native-paper';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native';

export default function MovieListItem({ movie }) {
    const [suggestions, setsuggestions] = React.useState([])

    const fetchSuggestions = async () => {
        const response = await fetch("https://movies.amhyou.com/suggestions?movie_id=" + movie.id);
        const data = await response.json();
        console.log(data)
        setsuggestions(data.data.movies);
    }
    React.useEffect(() => {
        setTimeout(fetchSuggestions, 1000)
    }, [])

    return (
        <ScrollView>
            <ImageBackground source={{ uri: movie.background_image }} style={styles.background}>
                <View style={styles.overlay}>
                    <Text variant="displaySmall" style={styles.text}>{movie.title_english}</Text>
                    <Image source={{ uri: movie.large_cover_image }} style={styles.image} />
                    {/* <Text variant="displaySmall" style={styles.text}>imdb rating is:</Text><Avatar.Text size={50} label={movie.rating} /> */}
                    <Text variant="displaySmall" style={styles.plot}>{movie.details.Plot}</Text>
                </View>
            </ImageBackground>
            <Card mode='outlined' style={{ marginHorizontal: 0, marginVertical: 0 }}>
                <Card.Cover source={{ uri: movie.large_screenshot_image1 }} style={{ borderRadius: 0 }} />
            </Card>
            <Card mode='outlined' style={{ marginHorizontal: 0, marginVertical: 0 }}>
                <Card.Cover source={{ uri: movie.large_screenshot_image2 }} style={{ borderRadius: 0 }} />
            </Card>
            <Card mode='outlined' style={{ marginHorizontal: 0, marginVertical: 0 }}>
                <Card.Cover source={{ uri: movie.large_screenshot_image3 }} style={{ borderRadius: 0 }} />
            </Card>
            {
                suggestions.length == 4 && <View style={{ backgroundColor: 'grey' }}><Text variant="displaySmall">Suggestions:</Text></View>
            }
            {
                suggestions.length == 4 && <View style={{ backgroundColor: 'grey' }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { router.replace(`/${suggestions[0].id}`); }}><Image source={{ uri: suggestions[0].medium_cover_image }} style={styles.image} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => { router.replace(`/${suggestions[1].id}`); }}><Image source={{ uri: suggestions[1].medium_cover_image }} style={styles.image} /></TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { router.replace(`/${suggestions[2].id}`); }}><Image source={{ uri: suggestions[2].medium_cover_image }} style={styles.image} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => { router.replace(`/${suggestions[3].id}`); }}><Image source={{ uri: suggestions[3].medium_cover_image }} style={styles.image} /></TouchableOpacity>
                    </View>
                </View>
            }

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'  'cover'
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Optional overlay for better text visibility
        padding: 0,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    image: {
        width: 150,
        height: 100,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
    },
    plot: {
        color: 'white',
        fontSize: 16,
        lineHeight: 30,
    }
});