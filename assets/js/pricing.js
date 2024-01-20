document.addEventListener('DOMContentLoaded', function () {
  const signOutLink = document.getElementById('signInBtnNav');

  firebase.auth().onAuthStateChanged(function (user) {
    const pricingTable = document.getElementById('pricing-table');
    const pricingPrompt = document.getElementById('pricing-prompt');

    if (user) {
      signOutLink.href = '#';
      signOutLink.onclick = signout;
      signOutLink.innerText = 'Sign out';

      pricingTable.classList.remove('disabled');
      pricingTable.classList.remove('blur');
      pricingPrompt.innerHTML = '';
    } else {
      signOutLink.href = '/signin.html?redirect=/pricing.html';
      signOutLink.innerText = 'Sign in';

      pricingTable.classList.add('disabled');
      pricingTable.classList.add('blur');
      pricingPrompt.innerHTML = 'Please sign in to access the pricing details.';
    }
  });

  function signout() {
    firebase.auth().signOut()
      .then(() => {
        console.log('User signed out successfully');
        // Redirect or perform additional actions after sign-out
      })
      .catch((error) => {
        console.log('Sign-out error:', error);
        // Handle sign-out error if needed
      });
  }
});