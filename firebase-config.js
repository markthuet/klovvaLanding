// Firebase Configuration
// TODO: Replace these values with your actual Firebase project credentials
// Get these from: Firebase Console > Project Settings > General > Your apps > Web app

const firebaseConfig = {
  apiKey: "AIzaSyDs4iOSvWMLnUWHvNYA5Sl4BHcyyWZwL6s",
  authDomain: "klovva-landing.firebaseapp.com",
  projectId: "klovva-landing",
  storageBucket: "klovva-landing.firebasestorage.app",
  messagingSenderId: "863122273379",
  appId: "1:863122273379:web:47327f717b61d1517ef456",
  measurementId: "G-0NMTPN52SQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
