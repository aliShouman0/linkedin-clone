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

main.getAPI = async (api_url) => {
  try {
    return await axios(api_url);
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

// main.login = async (email, password, setError, setdisabled, navigate) => {
//   const data = new FormData();
//   const url = `${main.baseUrl}login`;
//   data.append("email", email);
//   data.append("password", password);
//   const login_info = await main.postAPI(url, data);
//   if (login_info.status && login_info.status === 200) {
//     // if done save toke and get user info by api
//     const access_token = login_info.data.access_token;
//     localStorage.setItem("access_token", access_token);
//     // get user info
//     const user_info_url = `${main.baseUrl}me`;
//     // this api need token
//     const api_userInfo = new FormData();
//     api_userInfo.append("token", access_token);
//     const user_info = await main.postAPI(user_info_url, api_userInfo);
//     //  if token valid will get user info and save in local storage then redirect to home page
//     if (user_info.status && user_info.status === 200) {
//       localStorage.setItem("user_info", JSON.stringify(user_info.data));
//       navigate("/student");
//     } else {
//       localStorage.removeItem("access_token");
//       localStorage.removeItem("user_info");
//       setError(true);
//       setdisabled(false);
//     }
//   } else {
//     setError(true);
//     setdisabled(false);
//   }
// };

//get all Announcements for specific Course
main.getAnnouncements = (course_nb) =>
  fetch(
    `${main.baseUrl}get_announcements/${course_nb}?token=${localStorage.getItem(
      "access_token"
    )}`
  );

//get all Assignments for specific Course that not submit yet
main.getAssignments = (course_nb) =>
  fetch(
    `${main.baseUrl}get_assignments/${course_nb}?token=${localStorage.getItem(
      "access_token"
    )}`
  );

//get Instructor info
main.getInstructorInfo = async (setError, id) => {
  const url = `${main.baseUrl}get_instructor/${id}?token=${localStorage.getItem(
    "access_token"
  )}`;
  const res = await main.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data.result[0];
  } else {
    setError(true);
  }
};
//submit  Assignment
main.submit_assignment = async (dataToSubmit, close, setsubmit) => {
  const api = `${main.baseUrl}submit_assignment`;
  const res = await main.postAPI(api, dataToSubmit);
  if (res.status && res.status === 200) {
    close(false);
    setsubmit(true);
  }
};
//get all Courses that enrolled by specific student
main.getCourses = async (setError) => {
  const url = `${main.baseUrl}get_enrolled?token=${localStorage.getItem(
    "access_token"
  )}`;
  const res = await main.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data;
  } else {
    setError(true);
  }
};

//get all Courses that enrolled by specific student
main.getAllCourses = async (setError) => {
  const url = `${main.baseUrl}get_all_Courses?token=${localStorage.getItem(
    "access_token"
  )}`;
  const res = await main.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data;
  } else {
    setError(true);
  }
};

//save Instructor info to load them on seach coures
main.getInstructor = async (data, setError) => {
  let ins = await Promise.all(
    data.map((d) => main.getInstructorInfo(setError, d.course.assign_to))
  );
  return ins;
};

//save Instructor info to load them on seach coures
main.getInstructorForAdmin = async (data, setError) => {
  let ins = await Promise.all(
    data.map((d) => main.getInstructorInfo(setError, d.assign_to))
  );
  return ins;
};

//get Instructor info
main.getInstructors = async (setError) => {
  const url = `${main.baseUrl}get_instructors?token=${localStorage.getItem(
    "access_token"
  )}`;
  const res = await main.getAPI(url);
  if (res.status && res.status === 200) {
    return res.data.result;
  } else {
    setError(true);
  }
};

main.addCourse = async (
  code,
  name,
  instructorId,
  setError,
  close,
  addedCourse
) => {
  const api = `${main.baseUrl}add_course`;
  const dataToSubmit = new FormData();
  dataToSubmit.append("token", localStorage.getItem("access_token"));
  dataToSubmit.append("code", code);
  dataToSubmit.append("name", name);
  dataToSubmit.append("instructorId", instructorId);
  const res = await main.postAPI(api, dataToSubmit);
  if (res.status && res.status === 200) {
    close(false);
    addedCourse(true);
  } else {
    setError(true);
  }
};

export default main;
