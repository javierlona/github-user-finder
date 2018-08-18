// Instantiate Github object
let github = new GitHub;
// Instantiat UI
let ui = new UI;

// Search form input
const SEARCHUSER = document.querySelector("#search-user");

// Search form input event listener
SEARCHUSER.addEventListener('keyup', get_user_input, false);

function get_user_input(event){
  // Get input text
  let userName = event.target.value;
  
  if(userName !== ""){
    // Make http call and pass in the username to search for
    github.get_user(userName)
      .then(data => {
        console.log(data);
        // Access the message from the returned data from the user profile
        if(data.profile.message === "Not Found") {
          // Show alert
          console.log("No user found");
          ui.show_alert_messages();
        } else {
          // Show profile and the profile information
          ui.show_profile(data.profile);
          // Show the user's repo information
          ui.show_repos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clear_profile();
  }
}