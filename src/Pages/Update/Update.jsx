import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);
  // console.log(user);

  const handleOnUpdate = (event) => {
    event.preventDefault();

    fetch(
      `https://backend-class-55-gipm7c1a1-ismails-projects-2fe4d7e3.vercel.app/users/${storedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert(`${storedUser.name} updated successfully`);
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
        <h3 className="my-3">Update User {storedUser.name} Information</h3>

        <form onSubmit={handleOnUpdate}>
          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              name="name"
              defaultValue={storedUser.name}
              type="text"
              className="form-control"
              placeholder="Name Please"
            />
          </div>

          <div className="mb-3">
            <input
              onBlur={handleOnBlur}
              name="email"
              defaultValue={storedUser.email}
              type="email"
              className="form-control"
              placeholder="Email Please"
            />
          </div>

          <button type="submit" className="btn btn-primary me-3">
            Update User
          </button>

          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
