import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you want to delete ${user.name}`);
    if (agree) {
      // console.log('Yes Agree');
      const url = `https://backend-class-55-gipm7c1a1-ismails-projects-2fe4d7e3.vercel.app/users/${user._id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`${user.name} is deleted successfully`);
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="container my-5 py-5">
      <h1 className="text-center py-4">
        Number of Users: {displayUsers.length}
      </h1>
      <div className="users">
        {displayUsers.map((user) => (
          <div key={user._id} className="user">
            <h3>Name: {user.name}</h3>
            <h5>Email: {user.email}</h5>
            <button
              className="btn btn-outline-dark me-2 border-2 fw-bold mt-3"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
            <Link to={`/update/${user._id}`}>
              <button className="btn btn-outline-dark border-2 fw-bold mt-3">
                Update
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
