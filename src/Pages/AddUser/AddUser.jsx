import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({});
  // console.log(user);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log("handle on submit clicked");
    fetch(
      "https://backend-class-55-gipm7c1a1-ismails-projects-2fe4d7e3.vercel.app/",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User added Successfully");
          event.target.reset();
        }
      });
  };

  const handleOnBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className="container my-5 py-5">
      <div className="w-50 mx-auto">
        <h2 className="my-3">Please Add a New User</h2>

        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              name="name"
              type="text"
              className="form-control"
              placeholder="Name Please"
            />
          </div>

          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              name="email"
              type="email"
              className="form-control"
              placeholder="Email Please"
            />
          </div>
          <button type="submit" className="btn btn-primary me-3">
            Add User
          </button>
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
