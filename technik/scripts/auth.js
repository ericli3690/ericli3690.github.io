import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { toggleOptionFields } from './option.js';

$(document).ready(() => {
    // login using google
    const auth = getAuth();
    // signOut(auth);
    const provider = new GoogleAuthProvider();

    // open popup to sign in
    $('#signInButton').click(() => signInWithPopup(auth, provider))
    // on sign out
    $('#signOutButton').click(() => signOut(auth));

    auth.onAuthStateChanged(user => {
        if (user) {
            // signed in
            $('#whenSignedIn').show();
            $('#whenSignedOut').hide();
            $('#currentUser').text(`User: ${user.displayName}`);
            // place all the exercise labels; see option.js
            toggleOptionFields.forEach((e) => {
                e.placeExerciseLabels();
            });
        } else {
            // not signed in
            $('#whenSignedIn').hide();
            $('#whenSignedOut').show();
            $('#currentUser').text(``);
        }
    })
});

// https://fireship.io/lessons/firebase-quickstart/
// dropdown?
// randomize buttons / options
// store in database
// https://dev.to/trekhleb/weighted-random-algorithm-in-javascript-1pdc