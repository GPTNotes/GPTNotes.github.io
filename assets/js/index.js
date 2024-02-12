document.addEventListener('DOMContentLoaded', function () {
    var tryButton = document.getElementById('tryit-btn');
    var tryitForm = document.getElementById('tryit-form');

    // tryButton.addEventListener('click', function () {
    //     tryButton.style.display = 'none'; // Hide the tryButton
    //     tryitForm.style.display = 'block'; // Show the tryit-form content
    // });

    var url = new URL(window.location.href);
    var searchParams = new URLSearchParams(url.search);
    var boolValue = searchParams.get('tryit');
    var shouldTry = boolValue === 'true';
    if (shouldTry) {
        // tryButton.style.display = 'none'; // Hide the tryButton
        // tryitForm.style.display = 'block'; // Show the tryit-form content
        
        window.location = 'http://127.0.0.1:9999'
    };

    firebase.auth().onAuthStateChanged(function (user) {
        const accountManagement = document.getElementById('signin');

        if (user) {
            accountManagement.href = '/account.html';
            accountManagement.innerText = 'Account';
        } else {
            accountManagement.href = '/signin.html?redirect=/index.html';
            accountManagement.innerText = 'Sign in';
        }
    });
});