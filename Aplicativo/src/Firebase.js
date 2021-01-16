import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA77CAl1ROLljXud1tl0KBa8DHKGOhcpAM',
  authDomain: 'raspberry-firebase-ccc33.firebaseapp.com',
  databaseURL: 'https://raspberry-firebase-ccc33.firebaseio.com',
  projectId: 'raspberry-firebase-ccc33',
  storageBucket: 'raspberry-firebase-ccc33.appspot.com',
  messagingSenderId: '889249922790',
  appId: '1:889249922790:web:6fa3291da1f7e54e124527',
}

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
