import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAUmzM1srcqlBsTPx-OiORf2d2pihBoU58',
  authDomain: 'hackaton-1.firebaseapp.com',
  databaseURL: 'https://hackaton-1.firebaseio.com',
  storageBucket: 'hackaton-1.appspot.com',
  messagingSenderId: '1082056479634'
}
firebase.initializeApp(config)
const provider = new firebase.auth.FacebookAuthProvider()

const login = () => {
  return firebase.auth().signInWithPopup(provider)
}

export { login }
