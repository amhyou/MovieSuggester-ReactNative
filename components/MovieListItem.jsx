import { Card, Text, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function MovieListItem({ movie }) {
    return (
        <Card mode='contained' onPress={() => { console.log("pressed me"); router.push(`/${movie.id}`); }} style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Card.Title title={movie.title_long} subtitle={movie.genres.join(", ")} />
            {/* <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content> */}
            <Card.Cover source={{ uri: movie.large_cover_image }} />
            {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions> */}
        </Card>
    )
}