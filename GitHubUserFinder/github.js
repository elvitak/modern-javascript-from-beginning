class Github{
    constructor(){
        this.client_id = 'e242ae1296883f7d2056';
        this.client_secret = '548d2079d78a14d6b7e9fcadb7b055ccd9506363';
        this.auth_user = 'elvitak'
        this.auth_token = 'bf0fabf032bb38b31d65b5575b626a5a73731144';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}`,
            {
                method:'GET',
                headers: {'Authorization': 'Basic ' + btoa(this.auth_user + ":" + this.auth_token)}
            }
        );
        const repoResponse = await fetch(
             `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
             {
                 method:'GET',
                 headers: {'Authorization': 'Basic ' + btoa(this.auth_user + ":" + this.auth_token)}
            }
        );

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();
 
        return{
            profile : profileData,
            repos : reposData
        }
    }
}