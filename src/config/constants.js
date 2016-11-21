import rebase from 're-base';

export const config = rebase.createClass({
  apiKey: "AIzaSyAC6eBAMyFUHeFyALtsDOZXQ55YLuFkzx8",
  authDomain: "todolist-5ec65.firebaseapp.com",
  databaseURL: "https://todolist-5ec65.firebaseio.com/",
});

//firebase.initializeApp(config)
export const ref = config.database().ref()
export const firebaseAuth = config.auth
