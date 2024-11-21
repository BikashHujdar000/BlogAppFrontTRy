
// is logged in 

export const isLoggedIn = () => {

  let data = localStorage.getItem("data")
  if (data == null) {
    return false;
  }
  else {
    return true;
  }

}

// do login 

export const doLogin = (data, next) => {

  localStorage.setItem("data", JSON.stringify(data))
  next()

}

// do logout 


export const logOut = (next) => {

  localStorage.removeItem("data");
  next()

}

// getcurrent User 

export const getCurrentUser = () => {

  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"));
  }
  else {
    return undefined;
  }

}

export const getToken = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).jwtToken
  }
  else {
    return null;
  }

}