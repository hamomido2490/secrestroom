import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = {
  async saveTestResults(userId, results) {
    await firebase.firestore().collection('users').doc(userId)
      .collection('tests').add({
        date: firebase.firestore.FieldValue.serverTimestamp(),
        results: results
      });
  },

  async getTestHistory(userId) {
    const snapshot = await firebase.firestore().collection('users')
      .doc(userId).collection('tests').orderBy('date', 'desc').get();
    return snapshot.docs.map(doc => doc.data());
  }
};
