class FetchRepository {
    getFetch(route,request){
        return fetch(`http://192.168.2.231:3000/${route}`,{
                        method  : 'POST',
                        header : {
                        Accept  : 'application/json',
                        'Content-Type' : 'application/json'
                        },
                        body : request
                        })
                        .then(
                            response => {
                                return response.json()
                            })
    }

    SignIn(log,password,setToken,setError){
        let requestObject = JSON.stringify({login:log,pass:password})
        this.getFetch('users/signin',requestObject).then(res => {
            res.error ? setError({status:true,text:res.error}) : setToken(res.token)
        })
    }

    SignUp(log,password,setError,setProcess){
        let requestObject = JSON.stringify({login:log,pass:password})
        this.getFetch('users/signup',requestObject).then(res => {
            res.error ? setError({status:true,text:res.error}) : (setProcess(true),setError({status:false,text:null}))
        })
    }

    getProfile(token,setToken,setName){
        let requestObject = JSON.stringify({token:token})
        this.getFetch('content/userprofile',requestObject).then(res => {
            res.error ? setToken(null) : setName(res.name)
        })
    }

    getUserPosts(token,setToken,setPosts){
        let requestObject = JSON.stringify({token:token})
        this.getFetch('content/userposts',requestObject).then(res => {
            console.log(res)
            res.error ? setToken(null) : setPosts(res.posts)
        })
    }
}

export default FetchRepository;