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
              <li class="list-group-item">Website: ${user.blog}</li>
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

  show_alert_messages() {
    let alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-danger");
    alertDiv.append("No user found.");
    const SEARCH = document.querySelector("expr");

  }

  clear_profile() {
    this.profile.innerHTML = "";
  }
}