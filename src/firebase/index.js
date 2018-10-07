//import * as auth from './auth';
//import * as firebase from './firebase';
/*import {auth, db} from './firebase';
export {
  auth,
  db
};*/

import firebase from 'firebase';

// Initialize Firebase
  const prodConfig = {
    apiKey: "AIzaSyA8OCz9FmPiPbconGSDbdd1D4MW15KcDSw",
    authDomain: "hr-portal-e728f.firebaseapp.com",
    databaseURL: "https://hr-portal-e728f.firebaseio.com",
    projectId: "hr-portal-e728f",
    storageBucket: "hr-portal-e728f.appspot.com",
    messagingSenderId: "441309507446"
  };

  const devConfig = {
    apiKey: "AIzaSyA8OCz9FmPiPbconGSDbdd1D4MW15KcDSw",
    authDomain: "hr-portal-e728f.firebaseapp.com",
    databaseURL: "https://hr-portal-e728f.firebaseio.com",
    projectId: "hr-portal-e728f",
    storageBucket: "hr-portal-e728f.appspot.com",
    messagingSenderId: "441309507446"
  };
/*const devConfig = {
    apiKey: "AIzaSyAzFE2PUqupVMsH_TIMqQoHTq0IjOVS3Xg",
    authDomain: "hrmanager-8f146.firebaseapp.com",
    databaseURL: "https://hrmanager-8f146.firebaseio.com",
    projectId: "hrmanager-8f146",
    storageBucket: "",
    messagingSenderId: "752182474971"
};*/

firebase.initializeApp(devConfig);
export default firebase;
/*
const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  export {
    auth,
    db
  };*/
