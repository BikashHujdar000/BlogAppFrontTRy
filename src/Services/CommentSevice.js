// http://localhost:9000/api/comment/post/10/user/1

import axios from "axios"
import { getToken } from "../Authentication/auth";
import { privateAxios } from "./constant";

export const createComment = (postId, userId, comment) => {

  return privateAxios
    .post(`/api/comment/post/${postId}/user/${userId}`, comment)
    .then((response) => response.data)
    .catch((error) => console.log(error))


}