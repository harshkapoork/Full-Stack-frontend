// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app"; 
// getApp gives the complete infomation of app/
//  getApps gives the list of apps
//  initializeApp initialize/ trigger our firebase application
import { getStorage } from 'firebase/storage'
  


//  later keep this keys in env variable
// const firebaseConfig = {
//   apiKey:process.env.React_App_Firebase_Api_Key,
//   authDomain:process.env.React_App_Firebase_AuthDomain ,
//   projectId:process.env.React_App_Firebase_ProjectId,
//   storageBucket:process.env.React_App_Firebase_StorageBucket,
//   messagingSenderId:process.env.React_App_Firebase_MessagingSenderId,
//   appId:process.env.React_App_Firebase_AppId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDYi7FaVDBxq5HKwo0ADg6wqexST9EOvfA",
  authDomain: "video-bef82.firebaseapp.com",
  projectId: "video-bef82",
  storageBucket: "video-bef82.appspot.com",
  messagingSenderId: "473466716788",
  appId: "1:473466716788:web:4597f945f78ffcb2b18721",
  measurementId: "G-2S63SX0E95"
};



// Initialize Firebase
//  if already initialize then return app information else initialize app

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// Initialize Firebase


// get storage informationof the app which is already initialize\

const storage = getStorage(app) 
// get storage informationof the app which is already initialize

export { app, storage };