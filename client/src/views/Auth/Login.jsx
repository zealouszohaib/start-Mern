import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import loginMen from '/src/assets/images/auth/image.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import Swal from 'sweetalert2';
import { setUser } from '../../utills/user';

export default function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(response.token);
        window.location.reload();
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  });

  return (
    <div className="flex justify-around items-center w-full min-h-screen bg-gray-100 p-4">
      {/* Left Section */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div></div>
      </div>

      {/* Right Section */}
      <div className="flex items-center border-4 border-black rounded-3xl shadow-lg bg-white ">
        {/* Form Section */}
        <div className="p-6 bg-white rounded-3xl w-80">
          <form onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your email"
                className={`w-full p-3 border rounded-md bg-gray-100 text-gray-800 ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                className={`w-full p-3 border rounded-md bg-gray-100 text-gray-800 ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>

            <div className="text-right mb-4">
              <Link to="/auth/forget" className="text-red-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
              <div className="flex items-center ">
                <hr className="flex-1" />
                <span className="mx-2 text-gray-500">OR</span>
                <hr className="flex-1" />
              </div>
              <Link
                to="/auth/register"
                className="w-full py-2 bg-yellow-500 text-white text-center rounded-lg hover:bg-yellow-600 transition"
              >
                Register
              </Link>
            </div>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="hidden md:block">
          <img src={loginMen} alt="Login Illustration" className="h-100 object-contain rounded-r-3xl" />
        </div>
      </div>
    </div>
  );
}
