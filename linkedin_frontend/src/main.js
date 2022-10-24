// import axios from "./axios.min.js";
import axios from "axios";

const main = {};

main.baseUrl = "http://127.0.0.1:8000/";

main.token = localStorage.getItem("access_token");

main.Console = (title, values, oneValue = true) => {
  console.log("___" + title + "___");
  if (oneValue) {
    console.log(values);
  } else {
    for (let i = 0; i < values.length; i++) {
      console.log(values[i]);
    }
  }
  console.log("___/" + title + "___");
};

main.getAPI = async (api_url, api_token) => {
  try {
    return await axios(api_url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        Authorization: "token " + api_token,
      },
    });
  } catch (error) {
    // console.log(error);
    return error;
  }
};

main.postAPI = async (api_url, api_data, api_token = null) => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        Authorization: "token " + api_token,
      },
    });
  } catch (error) {
    main.Console("Error from POST API", error);
  }
};

main.signup = async (
  email,
  password,
  name,
  date,
  location,
  photo,
  company,
  type,
  description,
  degree,
  experience,
  setError,
  navigate,
  setLoad
) => {
  const url = `${main.baseUrl}auth/signup`;
  const data = {
    email: email,
    password: password,
    name: name,
    date: date,
    location: location,
    photo: photo,
    user_type: company ? "company" : "user",
    company_type: type,
    description: description,
    degree: degree,
    experience: experience,
  };
  const result = await main.postAPI(url, data);
  setLoad(false);
  if (result.status && result.status === 200) {
    navigate("/login");
  } else {
    setError(true);
  }
};

main.logout = async (navigate) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_info");
  navigate("/login");
};

// login if login not valid set error/
//apply anmition login load
main.login = async (email, password, setError, setLoad, navigate) => {
  const url = `${main.baseUrl}auth/login`;
  const data = { email, password };
  const result = await main.postAPI(url, data);
  setLoad(false);
  if (result && result.status === 200) {
    const user = result.data;
    const user_type = user.user.user_type;

    localStorage.setItem("access_token", user.token);
    localStorage.setItem("user_info", JSON.stringify(user.user));

    if (user_type === "company") {
      navigate("/home", { state: { isCompany: true } });
      console.log("company");
    } else {
      console.log("no company");

      navigate("/home", { state: { isCompany: false } });
    }
    return;
  }
  setError(true);
  setLoad(false);
};

// check if login by checking data in  localStorage
// check if user are login in and chck if token are valid
main.checkLogin = async (navigate, setIslogin) => {
  if (
    !localStorage.getItem("access_token") ||
    !localStorage.getItem("user_info")
  ) {
    localStorage.removeItem("user_info");
    localStorage.removeItem("access_token");
    setIslogin(false);
    navigate("/login");
    return;
  }
  setIslogin(true);
  return;
};

main.getJob = async (id, setError, setLoad) => {
  const url = `${main.baseUrl}job`;
  const result = await main.getAPI(url, localStorage.getItem("access_token"));
  if (result && result.status === 200) {
    setLoad(false);
    return result.data;
  }
  setError(true);
  return;
};

main.checkIsFollow = async (companyId) => {
  const url = `${main.baseUrl}user/isfollow/${companyId}`;
  const token = localStorage.getItem("access_token");
  const res = await main.getAPI(url, token);
  return res.data;
};

main.follow = async (companyId) => {
  const url = `${main.baseUrl}user/follow`;
  const token = localStorage.getItem("access_token");
  const data = {
    company_id: companyId,
  };
  const res = await main.postAPI(url, data, token);
  return res.status && res.status === 200;
};

main.apply = async (jobId) => {
  const url = `${main.baseUrl}job/apply`;
  const token = localStorage.getItem("access_token");
  const data = {
    job_id: jobId,
  };
  const res = await main.postAPI(url, data, token);
  console.log(res);
  return res;
};

export default main;
