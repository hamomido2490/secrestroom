import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "secretsroom.firebaseapp.com",
  projectId: "secretsroom"
};

firebase.initializeApp(firebaseConfig);

export const auth = {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  register(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
  onAuthStateChanged(callback) {
    return firebase.auth().onAuthStateChanged(callback);
  }
};
