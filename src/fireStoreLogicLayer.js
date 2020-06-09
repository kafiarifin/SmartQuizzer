import firebase from 'firebase';
import {TestData} from "./test-data";

const config = {
    apiKey: "AIzaSyBHizhi9yWthb-uvNr_juILneAtp8bZmiQ",
    authDomain: "tiberius-cougar-alpha.firebaseapp.com",
    databaseURL: "https://tiberius-cougar-alpha.firebaseio.com",
    projectId: "tiberius-cougar-alpha",
    storageBucket: "tiberius-cougar-alpha.appspot.com",
    messagingSenderId: "889412483336"
};

firebase.initializeApp(config);
const db = firebase.firestore();
    // .enablePersistence()
    // .catch(function (err) {
    //     if (err.code === 'failed-precondition') {
    //         // Multiple tabs open, persistence can only be enabled
    //         // in one tab at a a time.
    //         // ...
    //     } else if (err.code === 'unimplemented') {
    //         // The current browser does not support all of the
    //         // features required to enable persistence
    //         // ...
    //     }
    // });
db.settings({ timestampsInSnapshots: true });
export default db;


export const updateTest = (data) => {
    const half = data.length / 2;

    db.collection('test').doc('testOne').set({
        quizData: data.slice(0, half)
    }, {merge: true}).then(function () {
        console.log("Document successfully written!");
    }).catch((err) => {
        console.warn('ERROR', err);
    });

    db.collection('test').doc('testTwo').set({
        quizData: data.slice(half)
    }, {merge: true}).then(function () {
        console.log("Document successfully written!");
    }).catch((err) => {
        console.warn('ERROR', err);
    });
};
