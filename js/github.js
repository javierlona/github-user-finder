class Github {
  constructor() {
    this.client_id = "1afcf0a689897066afba";
    this.client_secret = "dfbc8bc5bb8c1877bf1bd93b80a299abb8a0fa4d";
    this.repo_count = 5;
    this.repo_sort = 'created: asc';
  }

  async get_user(user) {
    // Get the data dump info from the user we looked up
    let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // Get the data dump repo info from the user we looked up
    let repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // Convert the profile data to Json 
    let profileData = await profileResponse.json();
    // Convert the user's repo data to Json
    let profileRepos = await repoResponse.json();

    return {
      profile: profileData,
      repos: profileRepos
    }
  }

}