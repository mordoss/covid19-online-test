import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC5y1fFaiZ4veee-edbH8AF2l4F_6GCjz8',
  authDomain: 'korona-test-28cb4.firebaseapp.com',
  databaseURL: 'https://korona-test-28cb4.firebaseio.com',
  projectId: 'korona-test-28cb4',
  storageBucket: 'korona-test-28cb4.appspot.com',
  messagingSenderId: '705982936729',
  appId: '1:705982936729:web:5478a42fda40657f846a08',
  measurementId: 'G-PM50YR5073',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
