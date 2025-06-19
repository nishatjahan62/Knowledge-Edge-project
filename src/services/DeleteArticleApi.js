export const DeleteArticleById=id=>{
    return fetch(`http://localhost:5000/articles/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
}
