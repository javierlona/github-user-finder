// Instantiate Github object
let github = new Github;
// Instantiat UI
let ui = new UI;

// Search Input
const SEARCHUSER = document.querySelector("#search-user");

// Search input event listener
SEARCHUSER.addEventListener('keyup', get_user_input, false);

function get_user_input(event){
  // Get input text
  let userText = event.target.value;
  
  if(userText !== ""){
    console.log(userText);
    // Make http call
    github.get_user(userText)
      .then(data => {
        console.log(data);
        // Access the message from the returned data from the user profile
        if(data.profile.message === "Not Found") {
          // Show alert
          console.log("No user found");
        } else {
          // Show profile and the profile information
          ui.show_profile(data.profile);
        }
      })
  } else {
    // Clear profile
  }
}