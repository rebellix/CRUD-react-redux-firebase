import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig)

const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child('todos');