class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  show_profile(user) {
    this.profile.innerHTML = `
      <div class="">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <hr>
            <ul class="list-group">
              <li class="list-group-item">Bio: ${user.bio}</li>
              <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading my-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  show_repos(repos) {
    let output = "";

    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          
          </div>
        </div>
      `;
    })
    // Display the content
    document.querySelector("#repos").innerHTML = output;
  }

  show_alert_messages() {
    // Clear any existing alerts
    this.clear_alert_message();

    // Create the div
    let alertDiv = document.createElement("div");
    // Add classes
    alertDiv.classList.add("alert", "alert-danger");
    // Add the text
    alertDiv.append("No user found.");
    // Identify the parent
    const SEARCH_CONTAINER = document.querySelector(".search-container");
    // Insert the alert div into the DOM
    SEARCH_CONTAINER.insertBefore(alertDiv, SEARCH_CONTAINER.firstElementChild);

    // Timeout after 2 sec
    setTimeout(this.clear_alert_message, 2000);
  }

  clear_alert_message() {
    const CURRENT_ALERT = document.querySelector(".alert");
    if(CURRENT_ALERT) {
      CURRENT_ALERT.remove();
    } else {
      // do nothing
    }
  }

  clear_profile() {
    this.profile.innerHTML = "";
  }
}