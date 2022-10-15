import React from 'react'

function UserInput({ degree, setDegree,experience,setExperience }) {
  return (
    <> 
      <input
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
        placeholder="Degree"
      />
      <input
        type="text"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
        placeholder="Experience"
      />
    </>
  )
}

export default UserInput