document.addEventListener('DOMContentLoaded', function () {
    firebase.auth().onAuthStateChanged(function (user) {
        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const quote = document.getElementById('quote');
        const SignoutLink = document.getElementById('signout');

        if (user) {
            console.log('User signed in:', user);
            fullname.innerHTML = user.displayName;
            email.innerHTML = user.email;
            quote.innerHTML = getQuote();

            SignoutLink.addEventListener('click', signout);
        } else {
            window.location = '/signin.html?redirect=/account.html'
        }
    });

    function signout() {
        firebase.auth().signOut()
          .then(() => {
            console.log('User signed out successfully');
            window.location = '/signin.html?redirect=/account.html'
          })
          .catch((error) => {
            console.log('Sign-out error:', error);
            alert(`An error occured while signing out: ${error}`)

            // handle sign out error
          });
      }
});

function getQuote() {
    const quotes = [
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "If you tell the truth, you don't have to remember anything. - Mark Twain",
        "Be the change that you wish to see in the world. - Mahatma Gandhi",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The best way to predict the future is to invent it. - Alan Kay",
        "The only true wisdom is in knowing you know nothing. - Socrates",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "A champion is defined not by their wins but by how they can recover when they fall. - Serena Williams",
        "Everything you can imagine is real. - Pablo Picasso",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
        "It always seems impossible until it's done. - Nelson Mandela"
    ];


    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}