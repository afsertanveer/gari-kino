import React, { useContext } from "react";
import img from '../../assets/images/login/login.svg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signin} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin= event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          navigate('/');
        })
        .then(err=>console.error(err))
    }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">New to Car Kino <Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
