var url = new URL(window.location.href);
var searchParams = new URLSearchParams(url.search);
var email = searchParams.get('email');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if (email === '') {
    alert ('An unknown error occurred. Please try again.');
} else {
    if (validateEmail(email)) {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent. Please check your inbox.');
        })
        .catch((error) => {
            alert('An unknown error occurred. Please try again.')
        })
    } else {
        alert('An unknown error occurred. Please try again.');
    }
}