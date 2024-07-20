import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { router } from 'expo-router';

const AppBar = () => (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => { router.back() }} />
        <Appbar.Content title="Movie detail" />
    </Appbar.Header>
);

export default AppBar;