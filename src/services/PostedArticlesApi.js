export const ArticlePostedPromise=email=>{
    return fetch(`http://localhost:5000/articles/?email=${email}`)
    .then(res=>res.json())
}