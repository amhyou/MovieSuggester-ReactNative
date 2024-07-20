import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { router } from 'expo-router';

const AppBar = ({ title }) => (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => { router.back() }} />
        <Appbar.Content title={title} />
    </Appbar.Header>
);

export default AppBar;