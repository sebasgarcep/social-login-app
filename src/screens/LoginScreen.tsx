import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Title, Subheading } from 'react-native-paper';

import Container from '../components/Container';
import { RootStackParamList } from '../types';
import useGoogleLogin from '../hooks/useGoogleLogin';
import { useSession } from '../store/selectors/session';
 
export default function LoginScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
    const session = useSession();
    const [loadingGoogleLogin, promptGoogleLogin] = useGoogleLogin();

    React.useEffect(() => {
        if (session) {
            navigation.replace('Home');
        }
    }, [session]);

    return (
        <Container style={styles.container}>
            <Title style={styles.title}>Social Login App</Title>
            <Button
                disabled={loadingGoogleLogin}
                icon="google"
                mode="contained"
                onPress={promptGoogleLogin}
            >
                Login with Google
            </Button>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        marginBottom: 60,
    },
});
