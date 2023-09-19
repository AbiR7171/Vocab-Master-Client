import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const WordRequest = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const processedData = {
      ...data,
      price: parseFloat(data.price),
    };

    fetch("https://my-toys-server-red.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Success!", "Toy added successfully!", "ok");
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full">
      <form className="mb-36 rounded" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 rounded ">
          Add A Toy
        </h2>
        <div className="grid gap-6  md:grid-cols-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-md py-4 px-3  ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Picture URL
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="URL"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Toy Category
            </label>
            <select
              {...register("category")}
              className="select select-primary w-full"
            >
              <option>Sports Car</option>
              <option>Truck</option>
              <option>Regular Car</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Toy Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              placeholder="Toy Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              seller name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Seller Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Seller Email
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Price
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="price"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Rating
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="rating (max value =5)"
              max="5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Available Quantity
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Detail Description
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="description"
            />
          </div>
          <input
            className="btn bg-[#65C3C8] text-black"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default WordRequest;
