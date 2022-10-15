import React from "react";
import profile from "../assets/user.png";

function Applicant() {
  return (
    <div class="w-3/4 shadow-2xl  rounded-lg m-auto">
      <table class="w-full text-sm text-left  text-white  ">
        <thead class="text-xs   uppercase bg-blue-900  ">
          <tr>
            <th scope="col" class="py-3 px-4">
              photo
            </th>
            <th scope="col" class="py-3 px-4">
              Job Title
            </th>
            <th scope="col" class="py-3 px-4">
              Name
            </th>
            <th scope="col" class="py-3 px-4">
              Email
            </th>
            <th scope="col" class="py-3 px-4">
              Location
            </th>
            <th scope="col" class="py-3 px-4">
              Degree
            </th>
            <th scope="col" class="py-3 px-4">
              Experience
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-blue-300  text-xl border-blue-900 ">
            <td class="py-4 px-4   ">
              <img src={profile} alt="Home" className="m-auto h-7 w-7" />
            </td>
            <td class="py-4 px-4">Web</td>
            <td class="py-4 px-4">Ali</td>
            <td class="py-4 px-4">abc@cba.com</td>
            <td class="py-4 px-4">leb</td>
            <td class="py-4 px-4">cs</td>
            <td class="py-4 px-4">3 years</td>
          </tr>
          <tr class="border-b bg-blue-400  text-xl border-blue-900 ">
            <td class="py-4 px-4   ">
              <img src={profile} alt="Home" className="m-auto h-7 w-7" />
            </td>
            <td class="py-4 px-4">Web</td>
            <td class="py-4 px-4">Ali</td>
            <td class="py-4 px-4">abc@cba.com</td>
            <td class="py-4 px-4">leb</td>
            <td class="py-4 px-4">cs</td>
            <td class="py-4 px-4">3 years</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Applicant;
