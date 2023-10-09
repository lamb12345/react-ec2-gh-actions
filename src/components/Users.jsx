import React, { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
  const [usersData, setUsersData] = useState({
    users: [],
    isFetching: false,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      setUsersData((prevState) => {
        return { ...prevState, isFetching: true };
      });
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL);
      setUsersData({
        users: response.data,
        isFetching: false,
      });
    };
    fetchUsers();
  }, []);

  const RenderUser = ({ user }) => {
    return (
      <div className="border-b py-3">
        <h2>{user.name}</h2>
      </div>
    );
  };
  
  return (
    <div className="bg-white w-1/2 p-8 rounded-md">
      {usersData.isFetching ? (
        <h2>Please wait...</h2>
      ) : (
        usersData.users.map((user) => {
          return <RenderUser key={user.id} user={user} />;
        })
      )}
    </div>
  );
};
