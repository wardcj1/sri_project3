<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample FirebaseUI App</title>
<script>  
var config = {
    apiKey: "AIzaSyC5NVKGsm6lXtN-KoLPPzhz2jlxFRiz8Hc",
    authDomain: "smartroboinvestments.firebaseapp.com",
    databaseURL: "https://smartroboinvestments.firebaseio.com",
    projectId: "smartroboinvestments",
    storageBucket: "smartroboinvestments.appspot.com",
    messagingSenderId: "78343951803"
};
firebase.initializeApp(config);
</script>script>

    <script src="https://cdn.firebase.com/libs/firebaseui/2.2.1/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.2.1/firebaseui.css" />
    <script type="text/javascript">
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>' /recommendation,
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    </script>
  </head>
  <body>
    <!-- The surrounding HTML is left untouched by FirebaseUI.
         Your app may use that space for branding, controls and other customizations.-->
    <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
  </body>
</html>