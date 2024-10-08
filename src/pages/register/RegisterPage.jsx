import React, { useEffect } from 'react'
import MainLayout from '../../components/MainLayout'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../services/index/users';
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/reducers/userReducers';

const RegisterPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const { mutate } = useMutation({
        mutationFn: ({ name, email, password }) => {
            return signUp({ name, email, password });
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data));
            localStorage.setItem('account', JSON.stringify(data));
            toast.success("Registration Successfully");
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    useEffect(() => {
        if(userState.userInfo){
            navigate('/profile');
        }
    }, [navigate, userState.userInfo]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        mode: 'onChange',
    });

    const submitHandler = (data) => {
        const { name, email, password } = data;
        mutate({ name, email, password });
    };

    const password = watch('password');

  return (
    <MainLayout>
        <section className='container mx-auto px-5 py-10'>
            <div className='w-full max-w-sm mx-auto'>
                <h1 className='font-roboto text-4xl font-bold text-center text-dark-hard mb-8'>
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className='flex flex-col mb-6 w-full'>
                        <label 
                        htmlFor="name"
                        className='text-[#5a7184] font-semibold block'
                        >
                            Name
                        </label>
                        <input 
                        type="name" 
                        id='name'
                        {...register("name", {
                            minLength: {
                              value: 1,
                              message: "Name length must be at least 1 character",
                            },
                            required: {
                              value: true,
                              message: "Name is required",
                            },
                          })}
                        placeholder='Enter Name'
                        className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`}
                        />
                        {errors.name?.message && (
                            <p className='text-red-500 text-xs mt-1'>{errors.name?.message}</p>
                        )}
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <label 
                        htmlFor="email"
                        className='text-[#5a7184] font-semibold block'
                        >
                            Email
                        </label>
                        <input 
                        type="email" 
                        id='email'
                        {...register("email", {
                            pattern: {
                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Enter a valid email"
                            },
                            required: {
                              value: true,
                              message: "Email is required",
                            },
                          })}
                        placeholder='Enter email'
                        className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`}
                        />
                        {errors.email?.message && (
                            <p className='text-red-500 text-xs mt-1'>{errors.email?.message}</p>
                        )}
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <label 
                        htmlFor="password"
                        className='text-[#5a7184] font-semibold block'
                        >
                            Password
                        </label>
                        <input 
                        type="password" 
                        id='password'
                        {...register("password", {
                            required: {
                              value: true,
                              message: "Password is required"
                            },
                            minLength: {
                              value: 6,
                              message: "Password length muse be at least 6 characters",
                            },
                          })}
                        placeholder='Enter password'
                        className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"}`}
                        />
                        {errors.password?.message && (
                            <p className='text-red-500 text-xs mt-1'>{errors.password?.message}</p>
                        )}
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <label 
                        htmlFor="confirmPassword"
                        className='text-[#5a7184] font-semibold block'
                        >
                            Password
                        </label>
                        <input 
                        type="password" 
                        id='confirmPassword'
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Confirm password is required"
                            },
                            validate: (value) => {
                                if(value !== password){
                                    return "Passwords do not match";
                                }
                            }
                        })}
                        placeholder='Enter Confirm Password'
                        className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"}`}
                        />
                        {errors.confirmPassword?.message && (
                            <p className='text-red-500 text-xs mt-1'>{errors.confirmPassword?.message}</p>
                        )}
                    </div>
                    <button
                    type='submit'
                    className='bg-aqua text-white font-bold text-lg py-3 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed'
                    >
                        Register
                    </button>
                    <p className='text-sm font-semibold text-[#5a7184]'>You have an account?{" "}
                        <Link to='/login' className='text-aqua'>Login now</Link>
                    </p>
                </form>
            </div>
        </section>
    </MainLayout>
  )
}

export default RegisterPage