import React from "react";

function Add_edit_portfolio({
  detail,
  setDetails,
  response,
  handleSubmit,
  text,
}) {
  // console.log("DETAIL", detail);
  return (
    <div>
      <div className="w-full p-4 h-screen flex justify-center">
        <form className="w-[70%]" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="Title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={detail?.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Andrew Doe"
                onInput={(e) =>
                  setDetails({ ...detail, title: e.target.value })
                }
              />
              {response?.errors?.title && <p>{response?.errors?.title[0]}</p>}
            </div>
            <div>
              <label
                htmlFor="Description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={detail?.description}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@abc.com"
                onInput={(e) =>
                  setDetails({ ...detail, description: e.target.value })
                }
              />
              {response?.errors?.description && (
                <p>{response?.errors?.description[0]}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="document"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={detail?.image_url}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onInput={(e) =>
                setDetails({ ...detail, image_url: e.target.value })
              }
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="document"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              onChange={(e) =>
                setDetails({ ...detail, status: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Select Status
              </option>
              <option value="hidden" selected={detail.status == "hidden"}>
                Hide
              </option>
              <option value="visible" selected={detail.status == "visible"}>
                Show
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {text}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add_edit_portfolio;
