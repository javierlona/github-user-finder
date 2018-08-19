// Instantiate Github object
let github = new GitHub();
// Instantiat UI
let ui = new UI();

// Search form input
const SEARCHUSER = document.querySelector("#search-user");

// Search form input event listener
SEARCHUSER.addEventListener("keyup", get_user_input, false);

function get_user_input(event){
  // Get search input text
  let userName = event.target.value;

  if(userName !== ""){
    // Make http call and pass in the username to search for
    github.get_user(userName)
      .then( data => {
        // data is the object and it contains "profile" & "repos"
        // Access the message (value) from "profile", it only appears when no user is found
        if(data.profile.message === "Not Found") {
          // Show alert when no user is found
          ui.show_alert_messages();
        } else {
          // Pass/Show the user's profile information
          ui.show_profile(data.profile);
          // Pass/Show the user's repo information
          ui.show_repos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clear_profile();
  }
}