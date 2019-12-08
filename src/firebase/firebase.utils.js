import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyD3fUwNwE0EZKUOHcqlC40DtmSZOdnJ12I",
	authDomain: "clothing-store-db-7df3f.firebaseapp.com",
	databaseURL: "https://clothing-store-db-7df3f.firebaseio.com",
	projectId: "clothing-store-db-7df3f",
	storageBucket: "clothing-store-db-7df3f.appspot.com",
	messagingSenderId: "1035976801817",
	appId: "1:1035976801817:web:82c5f16d81d122f0abf488"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log("error creating user", err.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
