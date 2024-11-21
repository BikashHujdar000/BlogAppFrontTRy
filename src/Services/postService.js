import { myAxios, privateAxios } from "./constant";


export const createPost = (formData) => {

  const userId = formData.get("userId");
  const categoryId = formData.get("categoryId");

  if (!userId || !categoryId) {
    throw new Error("UserId or CategoryId is missing in FormData!");
  }

  const url = `/api/user/${userId}/category/${categoryId}/posts`;

  return privateAxios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Necessary for file uploads
      },

    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error in createPost:", error);
      throw error;
    });
};


//get alll post 

// http://localhost:9000/api/get/posts?pageNumber=0&pageSize=5&sortBy=postId

export const getALlPost = (pageNumber, pageSize) => {

  return myAxios
    .get(`/api/get/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      throw error;

    })
}


// http://localhost:9000/api/get/posts?pageNumber=0&pageSize=5&sortBy=postId