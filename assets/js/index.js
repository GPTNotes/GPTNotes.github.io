document.addEventListener('DOMContentLoaded', function () {
    var tryButton = document.getElementById('tryit-btn');
    var tryitForm = document.getElementById('tryit-form');

    tryButton.addEventListener('click', function () {
        tryButton.style.display = 'none'; // Hide the tryButton
        tryitForm.style.display = 'block'; // Show the tryit-form content
    });

    var url = new URL(window.location.href);
    var searchParams = new URLSearchParams(url.search);
    var boolValue = searchParams.get('tryit');
    var shouldTry = boolValue === 'true';
    if (shouldTry) {
        tryButton.style.display = 'none'; // Hide the tryButton
        tryitForm.style.display = 'block'; // Show the tryit-form content
    };
});