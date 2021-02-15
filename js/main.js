window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(function (registration) {
        console.log('Registration successful finish, scope is:', registration.scope);
      })
      .catch(function (error) {
        console.log('Registration failed, error:', error.js);
      })
  }
}