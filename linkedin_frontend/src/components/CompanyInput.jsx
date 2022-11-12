import React from "react";

function CompanyInput({ type, setType,description,setDescription }) {
  return (
    <> 
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
        placeholder="Company Type"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
        placeholder="Company Description"
      />
    </>
  );
}

export default CompanyInput;
