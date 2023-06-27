import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, get, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const login = async () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            //console.log('user.photoURL', user.photoURL);
            return user;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const logout = async () => {
    return signOut(auth)
        .then(() => null)
        .catch((error) => {
            console.error(error);
        });
};

export const onUserStateChange = (callback) => {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
};

const database = getDatabase(app);

// 2. 사용자가 어드민 권한이 있는지 확인 -> isAdmin을 user안에 넣음
const adminUser = async (user) => {
    return get(ref(database, 'admins'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const admins = snapshot.val();
                const isAdmin = admins.includes(user.uid);
                return { ...user, isAdmin }
            }
        })
}