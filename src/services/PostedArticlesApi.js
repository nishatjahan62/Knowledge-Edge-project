export const ArticlePostedPromise = (email) => {
  return fetch(
    `https://assignment-11-server-sigma-lime.vercel.app/articles/?email=${email}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }
  ).then((res) => res.json());
};
