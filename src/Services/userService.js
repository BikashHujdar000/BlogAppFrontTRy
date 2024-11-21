import { myAxios } from "./constant";

export const signUp = (user) => {

  return myAxios
    .post("api/users/create", user)
    .then((resposne) => resposne.data)
}

export const login = (loginDetail) => {
  return myAxios
    .post("/api/login", loginDetail)
    .then((resposne) => resposne.data)
}

