import React from "react";

function Add_edit_CategoryForm({name,setName,text,response,handleSubmit}) {
      
  return (
    <div className="w-full p-4 h-screen flex justify-center">
      <form className="w-[70%]" onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="React / Javascript"
              onInput={(e) => setName(e.target.value)}
            />
            {response?.errors?.name && <p className="text-red-800">{response?.errors?.name[0]}</p>}
          </div>
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

export default Add_edit_CategoryForm;
