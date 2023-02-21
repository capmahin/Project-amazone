import Layout from "@/components/Layout"
import Link from "next/link"
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import {signIn, useSession} from 'next-auth/react'
import { getError } from "@/utils/error";
import { toast } from "react-toastify";
// import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export default function LoginScreen() {

    const {data: session} = useSession();
    const router = useRouter();
    const {redirect} = router.query;

    useEffect(()=>{
        if(session?.user){
            router.push(redirect || '/');
        }
    },[router, session, redirect]);
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm();

    const submitHandler = async ({email, password}) =>{
        //    console.log(email,password); 
        try{
            const result = await signIn('credentials',{
                redirect:false,
                email,
                password,
            });
            if(result.error){
                toast.error(result.error);
            }
        } catch(err){
               toast.error(getError(err));
        }
    }
  return (
    <Layout title="Login">
     <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input type="text"
        {
            ...register('name',{ required:'Please enter name',
        
        })
        }
        className="w-full" id="name" autoFocus>

        </input>
        {errors.name && (<div className="text-red-500">{errors.name.message}</div>)}
        </div>
        <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input type="email"
        {
            ...register('email',{ required:'Please enter email',
        pattern:{
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
            message:'Please enter valid email',
        }
        })
        }
        className="w-full" id="email">

        </input>
        {errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
        </div>
        <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input type="password" 
        {
            ...register('password',{
                required:'please enter password',
                minLength:{value:3, message:'password is more then 5 chars'},
            })
        }
        className="w-full" id="password" autoFocus>
        </input>
        {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
        )}
        </div>
        <div className="mb-4">
        <label htmlFor="confirmPassword">ConfirmPassword</label>
        <input type="password" 
        {
            ...register('confirmPassword',{
                required:'please enter confirm password',
                validate:(value)=>value === getValues('password'),
                minLength:{value:2, message:'password is more then 5 chars'},
            })
        }
        className="w-full" id="confirmPassword" autoFocus>
        </input>
        {errors.confirmPassword && errors.confirmPassword.type === 'validate'&&(
            <div className="text-red-500">Password do not match</div>
        )}
        </div>


        <div className="mb-4">
         <button className="primary-button">Login</button>
        </div>
        <div className="mb-4">
         Don&apos;t have account? &nbsp;
        </div>
        <Link legacyBehavior href="register">Register</Link>
     </form>
    </Layout>
  )
}
