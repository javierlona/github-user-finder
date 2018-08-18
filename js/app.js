// Instantiate GitHub object
let github = new Github;

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
        // Access the message from the returned data
        if(data.profile.message === "Not Found") {
          // Show alert
          console.log("No user found");
        } else {
          // Show profile
        }
      })
  } else {
    // Clear profile
  }
}