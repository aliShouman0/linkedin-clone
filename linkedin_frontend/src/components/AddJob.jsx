import { useState } from "react";

function AddJob({ close }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // setLoad(true);
    // setdisabled(true);
    setError(false);
    if (!title) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    if (!description) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }

    setTitle("");
    setDescription("");
    //  .login(email, password, setError, setdisabled, navigate);
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full
     bg-slate-700/90 z-10"
    >
      <form
        className="w-1/2 h-auto text-center  bg-gray-400 p-2 rounded-lg mt-5 mx-auto"
        onSubmit={(e) => submit(e)}
      >
        <div className="text-left">
          <button
            onClick={(e) => {
              e.preventDefault();
              close(false);
            }}
            className="mt-2 ml-2 text-2xl"
          >
            X
          </button>
        </div>
        <p className="font-bold text-3xl">Post Job</p>
        <input
          type="text"
          value={title}
          className=" p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
          placeholder="Job Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={description}
          className=" p-3 my-2 w-3/4   border border-black outline-none focus:border-sky-600 "
          placeholder="Job Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        {error && (
          <p className=" mx-auto  w-1/2    rounded-md  text-red-900">
            Some Thing is Wrong :(
          </p>
        )}
        <input
          type={"submit"}
          // disabled={disabled}
          value="Post"
          className="bg-sky-600 text-white px-5 py-3 rounded-full my-3  w-3/4 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default AddJob;
