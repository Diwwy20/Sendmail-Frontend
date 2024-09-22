import React from 'react'
import { useForm } from "react-hook-form";
import { sendMail } from "../../services/index/email";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';

import MainLayout from '../../components/MainLayout'
import { useSelector } from 'react-redux';

const Mail = () => {

    const userState = useSelector((state) => state.user);

      // Mutation
    const { mutate, isLoading } = useMutation({
        mutationFn: async ({ firstName, lastName, address, phone, email, subject, explain, message, file, position }) => {
            const formData = new FormData();
            formData.append('firstname', firstName);
            formData.append('lastname', lastName);
            formData.append('address', address);
            formData.append('phone', phone);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('explain', explain);
            formData.append('file', file);
            formData.append('position', position);
            formData.append('message', message)
            

            return sendMail({ formData })
        },
        onSuccess: () => {
            toast.success("Send Email Successfully");
            reset();
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
      } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
          address: "",
          phone: "",
          email: "",
          position: "",
          message: "",
        },
        mode: "onChange",
      });

      const formatPhoneNumber = (value) => {
        if(!value){
            return value;
        }

        let phoneNumber = value.replace(/[^\d]/g, '');

        const phoneNumberLength = phoneNumber.length;

        if(phoneNumberLength < 4){
            return phoneNumber;
        }
        if(phoneNumberLength < 7){
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }

        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
      }

    const submitHandler = (data) => {
        const { firstName, lastName, address, phone, email, position, message } = data;
        const subject = `สมัครฝึกงานในตำแหน่ง ${position}`;
        const explain = `เรียน ฝ่ายบุคคล บริษัท อินเทิร์นจ๊อบ จำกัด
                        ${message}`;
        const file = data.file[0]; 
        mutate({ firstName, lastName, address, phone, email, subject, explain, message, file, position });
    };

  return (
    <MainLayout>
        <section className='container mx-auto px-5 py-10'>
            <div className='w-full max-w-2xl mx-auto'>
                <h1 className="font-roboto text-4xl font-bold text-center text-dark-hard mb-8">
                    Compose
                </h1>
                <form 
                onSubmit={handleSubmit(submitHandler)}
                className='w-full overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-10'>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label 
                            htmlFor="firstname"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                First Name
                            </label>
                            <input 
                            type="text" 
                            id='firstName'
                            {...register("firstName", {
                                required: {
                                  value: true,
                                  message: "Firstname is required",
                                },
                              })}
                            placeholder='Enter Firstname'
                            className={`w-full py-3 px-4 mb-3 placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg font-semibold block outline-none border ${errors.firstName ? "border-red-500" : "border-[#c3cad9]"} `} 
                            />
                            {errors.firstName?.message && (
                                <p className="text-red-500 text-xs my-2">
                                    {errors.firstName?.message}
                                </p>
                            )}
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label 
                            htmlFor="lastname"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Last Name
                            </label>
                            <input 
                            type="text" 
                            id='lastName'
                            {...register("lastName", {
                                required: {
                                  value: true,
                                  message: "LastName is required",
                                },
                              })}
                            placeholder='Enter Lastname'
                            className={`w-full py-3 px-4 mb-3 placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg font-semibold block outline-none border ${errors.lastName ? "border-red-500" : "border-[#c3cad9]"}`} 
                            />
                            {errors.lastName?.message && (
                                <p className="text-red-500 text-xs my-2">
                                    {errors.lastName?.message}
                                </p>
                            )}                           
                        </div>
                        <div className='w-full px-3 mb-6 md:mb-0'>
                            <label 
                            htmlFor="email"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Address
                            </label>
                            <input 
                            type="text" 
                            id='address'
                            {...register("address", {
                                required: {
                                  value: true,
                                  message: "Address is required",
                                },
                              })}
                            placeholder='Enter Address'
                            className={`w-full py-3 px-4 mb-3 placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg font-semibold block outline-none border ${errors.address ? "border-red-500" : "border-[#c3cad9]"}`} 
                            />
                            {errors.address?.message && (
                                <p className="text-red-500 text-xs my-2">
                                    {errors.address?.message}
                                </p>
                            )} 
                        </div>
                        <div className='w-full px-3 mb-6 md:mb-0'>
                            <label 
                            htmlFor="phone"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Phone
                            </label>
                            <input 
                            type="tel" 
                            {...register("phone", {
                                required: {
                                  value: true,
                                  message: "Phone is required",
                                },
                                maxLength: {
                                value: 12,
                                message: "Phone number must be exactly 10 digits",
                                },
                                minLength: {
                                value: 12, 
                                message: "Phone number must be exactly 10 digits",
                                },
                                onChange: (e) => {
                                  e.target.value = formatPhoneNumber(e.target.value);
                                },
                              })}
                            placeholder='Enter Phone Number'
                            className={`w-full py-3 px-4 mb-3 placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg font-semibold block outline-none border ${errors.phone ? "border-red-500" : "border-[#c3cad9]"}`} 
                            />
                            {errors.phone?.message && (
                                <p className="text-red-500 text-xs my-2">
                                    {errors.phone?.message}
                                </p>
                            )}                            
                        </div>
                        <div className='w-full px-3 mb-6 md:mb-0'>
                            <label 
                            htmlFor="email"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Email
                            </label>
                            <input 
                            type="email" 
                            id='email'
                            {...register("email", {
                                pattern: {
                                  value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: "Enter a valid email",
                                },
                                required: {
                                  value: true,
                                  message: "Email is required",
                                },
                              })}
                            placeholder='Enter Email'
                            className={`w-full py-3 px-4 mb-3 placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`} 
                            />
                            {errors.email?.message && (
                                <p className="text-red-500 text-xs my-2">
                                    {errors.email?.message}
                                </p>
                            )}                            
                        </div>
                        
                        {/* <div className='w-full px-3 md:mb-0'>
                            <label 
                            htmlFor="email"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Email : {userState.userInfo?.email}
                            </label>                        
                        </div> */}
                        <div className='w-full px-3 md:mb-0'>
                            <label 
                            htmlFor="email"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Resume 
                            </label>
                            <input 
                            type="file" 
                            id='file'
                            accept='application/pdf'
                            {...register("file", { required: true })}
                            />                        
                        </div>  


                        {/* Radio buttons for selecting position */}
                        <div className='w-full px-3 my-6 md:mb-0'>
                            <label className='block tracking-wide text-gray-700 text-base font-bold mb-2'>
                                Position
                            </label>
                            <div className='flex flex-col'>
                                <label className='inline-flex items-center'>
                                    <input
                                        type="radio"
                                        value="Web Developer"
                                        {...register("position")}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Web Developer</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input
                                        type="radio"
                                        value="Full Stack Developer"
                                        {...register("position")}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Full Stack Developer</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input
                                        type="radio"
                                        value="Backend Developer"
                                        {...register("position")}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Backend Developer</span>
                                </label>
                            </div>
                        </div>
                        <div className='w-full px-3 my-6 md:mb-0'>
                            <label 
                            htmlFor="message"
                            className='block tracking-wide text-gray-700 text-base font-bold mb-2'
                            >
                                Message (Why do you want to work here?)
                            </label>
                            <textarea 
                            {...register("message", {
                                required: {
                                value: true,
                                message: "Message is required",
                                },
                                maxLength: {
                                value: 500,
                                message: "Message cannot exceed 500 characters",
                                },
                            })}
                            placeholder='Enter your message'
                            className={`w-full py-3 px-4 mb-3 placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg font-semibold block outline-none border ${errors.message ? "border-red-500" : "border-[#c3cad9]"}`} 
                            rows="5"
                            />
                            {errors.message?.message && (
                                <p className="text-red-500 text-xs my-2">
                                    {errors.message?.message}
                                </p>
                            )}                            
                        </div>
                    </div>
                    <button
                    type="submit"
                    disabled={!isValid || isLoading}
                    className="bg-aqua text-white font-bold text-lg py-3 px-6 w-full rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    </MainLayout>
  )
}

export default Mail