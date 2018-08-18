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
            <a href="${user.html_url}" target="_blank" class"btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
          </div>
        </div>
      </div>
    `;
  }
}