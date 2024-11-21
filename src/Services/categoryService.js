import { myAxios } from "./constant";


// export const login = (loginDetail) => {
//   return myAxios
//     .post("/api/login", loginDetail)
//     .then((resposne) => resposne.data)
// }

// lets get all category 

export const getCategories = () => {

  return myAxios.get("/api/categories/get")
    .then((resposne) => resposne.data)



}