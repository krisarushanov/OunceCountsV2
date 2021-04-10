import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDyWXUl-75Ds9R1Hko4bbvrKAhNDMCmpUA",
    authDomain: "ounce-counts.firebaseapp.com",
    projectId: "ounce-counts",
    storageBucket: "ounce-counts.appspot.com",
    messagingSenderId: "908173705492",
    appId: "1:908173705492:web:530fed2ee7ccd50c8c8201"
})

export const auth = app.auth()
export default app