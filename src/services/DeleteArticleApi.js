export const DeleteArticleById = (id) => {
  return fetch(`http://localhost:5000/articles/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  }).then((res) => res.json());
};
