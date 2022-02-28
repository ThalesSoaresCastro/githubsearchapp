
const url:string = 'https://api.github.com/search/users?q=';

interface IUser {
    name:string;
}

interface IRepo{
    repo:string;
}

class GitHubApi{
    async getUser(user:IUser){
        return await fetch(url+user.name)
            .then(resp =>  {
                return  !resp.ok ? { status: resp.status } : resp.json()
            })
            .catch(error =>{
                return error
            });
    }

    async getRepos(repoUrl:IRepo){
        return await fetch(repoUrl.repo)
            .then(resp =>  {
                return  !resp.ok ? { status: resp.status } : resp.json()
            })
            .catch(error =>{
                return error
            });
    }
}


export default new GitHubApi();