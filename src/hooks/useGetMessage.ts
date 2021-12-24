import * as React from 'react';

import { getMessage as getMessageFromServer } from '../services/server';
import { useSession } from '../store/selectors/session';

export default function useGetMessage(): [string | null, () => Promise<void>] {
    const session = useSession();
    const [message, setMessage] = React.useState<string | null>(null);

    const getMessage = React.useCallback(async () => {
        if (!session) {
            return;
        }

        const newMessage = await getMessageFromServer(session);

        setMessage(newMessage);
    }, [session, setMessage]);

    React.useEffect(() => {
        getMessage();
    }, []);

    return [message, getMessage];
}