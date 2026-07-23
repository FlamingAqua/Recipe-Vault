"use client";


import {
  loginWithGoogle,
} from "@/lib/auth";


import {
  Button,
} from "@/components/ui/button";


import {
  FcGoogle,
} from "react-icons/fc";


export default function GoogleLoginButton(){

async function handleLogin(){

  try{

    await loginWithGoogle();

  }
  catch(error){

    console.error(error);

  }

}


return (

<Button
  onClick={handleLogin}
  className="w-full rounded-xl"
>

<FcGoogle className="mr-2 h-5 w-5"/>

Continue with Google

</Button>

);


}