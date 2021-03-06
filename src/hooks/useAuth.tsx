import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { auth, db } from '../backend/config';

import { User } from '../interfaces/user';
import firebase from 'firebase';

type Response = Promise<void | { error?: { message: string } }>;

interface AuthContext {
    user: User;
    signUp: (
        credentials: { name: string; email: string; password: string }
    ) => Response;
    signIn: (credentials: {
        email: string;
        password: string;
    }) => Promise<firebase.User | { error?: { message: string } }>;
    signOut: () => Response;
    sendPasswordResetEmail: (email: string) => Response;
    updateUser: (user: { id: string; data: any }) => Response;
    deleteUser: () => Response;
}

const authContext = createContext({ user: {} } as AuthContext);
const { Provider } = authContext;

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
    const auth = useAuthProvider();
    return <Provider value={auth}>{props.children}</Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};


const useAuthProvider = () => {
    const [user, setUser] = useState(null);

    const createUser = async (currentUser: User) => {
        try {
            return db
                .collection('Usuarios')
                .doc(currentUser.uid)
                .set({ ...currentUser }, { merge: true });
        } catch (error) {
            return { error };
        }
    };

    const updateUser = async ({ id, data }) => {
        try {
            await db.collection('Usuarios').doc(id).update(data);
            setUser({ ...user, ...data });
        } catch (error) {
            return { error };
        }
    };

    const deleteUser = async () => {
        try {
            await auth.currentUser.delete();
            setTimeout(() => setUser(false), 1000);
        } catch (error) {
            return { error };
        }
    };

    const signUp = async ({ name, email, password }) => {
        try {
            return await auth
                .createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    auth.currentUser.sendEmailVerification();
                    return createUser({
                        uid: response.user.uid,
                        Email: email,
                        Nome: name,
                        Senha: password
                    });
                });
        } catch (error) {
            return { error };
        }
    };

    const signIn = async ({ email, password }) => {
        try {
            const { user, additionalUserInfo } =
                await auth.signInWithEmailAndPassword(email, password);
            const currentUser = { ...user, additionalUserInfo };
            setUser(currentUser);
            getUserAdditionalData(currentUser);
            return currentUser;
        } catch (error) {
            return { error };
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut().then(() => {
                setUser(false);
            });
        } catch (error) {
            return { error };
        }
    };

    const sendPasswordResetEmail = async (email: string) => {
        const response = await auth.sendPasswordResetEmail(email);
        return response;
    };

    // Get the user data from Firestore
    const getUserAdditionalData = async (user: firebase.User) => {
        db.collection('Usuarios')
            .doc(user.uid)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    setUser({ ...user, ...doc.data() });
                } else {
                    console.log('Este documento n??o existe!');
                }
            });
    };

    /// We need to get the user data from the Firestore db
    const handleAuthStateChanged = (user: firebase.User) => {
        if (user?.uid) {
            setUser(user);
            getUserAdditionalData(user);
        }
    };

    useEffect(() => {
        // Subscribe to user on mount
        const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);

        // Unsubscribe on cleanup
        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user?.uid) {
            // Subscribe to user document
            db.collection('Usuarios')
                .doc(user.uid)
                .onSnapshot((doc) => setUser(doc.data()));
        }
    }, [user?.uid]);

    return {
        user,
        signUp,
        signIn,
        signOut,
        sendPasswordResetEmail,
        updateUser,
        deleteUser,
    };
};
