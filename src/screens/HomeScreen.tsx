import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Subheading } from 'react-native-paper';

import Container from '../components/Container';
import { RootStackParamList } from '../types';
import { useSession } from '../store/selectors/session';
import { useLogout } from '../store/actions/session';
import useGetMessage from '../hooks/useGetMessage';
 
export default function LoginScreen({
    navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
    const session = useSession();
    const [message, getMessage] = useGetMessage();
    const logout = useLogout();

    React.useEffect(() => {
        if (!session) {
            navigation.replace('Login');
        }
    }, [session]);

    return (
        <Container style={styles.container}>
            <Container style={styles.message}>
                <Subheading>{message}</Subheading>
                <Button
                    disabled={!message}
                    mode="contained"
                    onPress={() => getMessage()}
                >
                    Get Message
                </Button>
            </Container>
            <Button
                mode="contained"
                onPress={() => logout()}
            >
                Logout
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
    message: {
        flex: 0,
        fontSize: 20,
        marginTop: 20,
        marginBottom: 200,
    },
});
