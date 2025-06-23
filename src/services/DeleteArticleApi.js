export const DeleteArticleById = (id) => {
  return fetch(
    `https://assignment-11-server-sigma-lime.vercel.app/articles/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }
  ).then((res) => res.json());
};
