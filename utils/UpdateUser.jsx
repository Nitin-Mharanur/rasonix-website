"use client";
import React, { useState } from "react";

function UpdateUser({ id, details }) {
  const [response, setResponse] = useState();
  async function updateUser() {
    const res = await fetch(`http://loacalhost:8000/user/${id}/update`, {
      method: "POST",
      body: JSON.stringify(details),
    }).then((res) => res.json());
    setResponse(res);
  }

  useEffect(() => {
    updateUser();
  }, []);
  return <button onClick={handleUpdate}>Update</button>;
}

export default UpdateUser;
