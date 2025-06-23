export const ArticlePostedPromise=email=>{
    return fetch(`http://localhost:5000/articles/?email=${email}`,{
         headers:{
          Authorization:`Bearer ${localStorage.getItem("access-token")}`
        }
    }
        
    )
    .then(res=>res.json())
}

