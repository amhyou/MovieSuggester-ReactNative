import { Card, Text, Button, Avatar } from 'react-native-paper';
import { router } from 'expo-router';
import { ImageBackground, StyleSheet, Image, View, ScrollView } from 'react-native';

export default function MovieListItem({ movie }) {
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
        width: 300,
        height: 300,
        marginRight: 0,
        borderRadius: 5,
    },
    plot: {
        color: 'white',
        fontSize: 16,
        lineHeight: 30,
    }
});