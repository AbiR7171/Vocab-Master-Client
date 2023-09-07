import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import moment from "moment/moment";
import svg from '../../../src/assets/register/undraw_welcome_re_h3d9.svg'
import { useState } from "react";


const Register = () => {
  // const { register, handleSubmit, watch, reset, formState: {errors },} = useForm();
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('')
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const data = { name, email, password, photo }

    console.log(data)

    if (password.length < 6) {
      setError(' Please enter 6 characters password')
      return
    }

    createUser(email, password)
      .then((result) => {
        const userCreated = result.user;
        console.log(userCreated);
        reset();

        navigate("/allRouts/learn");
      })
      .catch(error => {
        console.log(error);
      })

    axios
      .post("https://vocab-master-server.vercel.app/users", {
        name: name,
        email: email,
        image: photo,
        season: 1,
        diamond: 0,
        role: "student",
        date: moment().format("D,MM,yyyy"),
      })
      .then((data) => {
        console.log(data);
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Register",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/allRouts/learn");
        }
      });

  }

  // const onSubmit = (data) => {
  //   console.log(data);
  //   createUser(data.email, data.password)
  //     .then((result) => {
  //       const userCreated = result.user;
  //       console.log(userCreated);
  //       reset();

  //       navigate("/allRouts/learn");
  //     })
  //     .catch((error) => console.log(error));

  //   axios
  //     .post("https://vocab-master-server.vercel.app/users", {
  //       name: data.name,
  //       email: data.email,
  //       image: data.image,
  //       season: 1,
  //       diamond: 0,
  //       role: "student",
  //       date: moment().format("D,MM,yyyy"),
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       if (data.data.insertedId) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Successfully Register",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };

  // console.log(moment().format("D,MM,yyyy"));

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/nRYQHYz/space-galaxy-background.jpg')]">
        <div className="hero-content flex-col lg:flex-row">

          {/* <div className="flex justify-center lg:text-left">
            <img className="w-4/6" src={svg} alt="" />
          </div> */}

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50 my-10">
            <h1 className="text-5xl text-slate-800 text-center font-bold font-serif p-5">Register</h1>

            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className='my-5 mx-5 text-black'>already have an account ? <Link className='text-lime-800 font-bold' to='/login'>logIn</Link></p>
          </div>
          <p className='text-error text-center mt-5'>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
