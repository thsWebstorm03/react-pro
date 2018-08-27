import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'adv-react-23-08'

const fbConfig = {
  apiKey: 'AIzaSyAlWpSCiLQOATDM2O869VEYBfT3kuDuxc0',
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: '842367541781'
}

firebase.initializeApp(fbConfig)
