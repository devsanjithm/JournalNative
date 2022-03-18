
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCGJrlmMD7mz19_uCyZY8CNtO8y0V-Ap0s",
  authDomain: "journal-f83aa.firebaseapp.com",
  projectId: "journal-f83aa",
  storageBucket: "journal-f83aa.appspot.com",
  messagingSenderId: "960190484251",
  appId: "1:960190484251:web:bde31131b103538ca38dbe"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true }); 
}
export { firebase };