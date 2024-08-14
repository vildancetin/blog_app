import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Users = () => {
  const params = useParams();
  // return <div>{params.userId ? <Outlet /> : <div>Users</div>}</div>;
  return (
    <div>
      <div>Users</div>
    </div>
  );
};

export default Users;
