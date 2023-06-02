import React from "react";

function Add_Edit_UserForm({
  detail,
  setDetails,
  response,
  handleSubmit,
  text,
}) {
  return (
    <div className="w-full p-4 h-screen flex justify-center">
      <form className="w-[70%]" onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={detail.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Andrew Doe"
              onInput={(e) => setDetails({ ...detail, name: e.target.value })}
            />
            <div>
              {response?.errors?.name && <p>{response?.errors?.name[0]}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={detail.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@abc.com"
              onInput={(e) => setDetails({ ...detail, email: e.target.value })}
            />
            <div>
              {response?.errors?.email && <p>{response?.errors?.email[0]}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone_no"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone_no"
              value={detail.phone_no}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onInput={(e) =>
                setDetails({ ...detail, phone_no: e.target.value })
              }
            />
            <div>
              {response?.errors?.phone_no && (
                <p>{response?.errors?.phone_no[0]}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <select
              type="text"
              id="company"
              name="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setDetails({ ...detail, role: e.target.value })}
            >
              <option value="admin" selected={detail.role == "admin"}>
                Admin
              </option>
              <option value="editor" selected={detail.role == "editor"}>
                Editor
              </option>
              <option value="user" selected={detail.role == "user"}>
                User
              </option>
            </select>
            <div>
              {response?.errors?.role && <p>{response?.errors?.role[0]}</p>}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            onInput={(e) => setDetails({ ...detail, password: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {text}
        </button>
      </form>
    </div>
  );
}

export default Add_Edit_UserForm;
