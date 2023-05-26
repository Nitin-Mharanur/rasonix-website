import React from "react";

function DeleteUser({ id, setUsers }) {
  async function handleDelete(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/user/${id}/delete/`, {
      method: "DELETE",
    }).then((res) => res.json());

    // setUsers(res);
    // setUsers(res);
  }
  return (
    <button
      className="p-2 bg-red-600 rounded-md"
      onClick={() => handleDelete(id)}
    >
      Delete
    </button>
    // <button className="btn btn-error" onClick={() => handleDelete(id)}>
    //   Delete
    // </button>
  );
}

export default DeleteUser;
