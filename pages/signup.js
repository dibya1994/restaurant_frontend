import Head from 'next/head'
import  React,{ useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { deepPurple } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import cookie from "js-cookie";




const inter = Inter({ subsets: ['latin'] })




export default function Signup() {
  


  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [password , setPassword] = useState("");
  const onchangeHandler=(e)=>{
   if(e.target.name=='name')
   {
    setName(e.target.value);
   }
   else if(e.target.name=='email')
   {
    setEmail(e.target.value);
   }
   else if(e.target.name=='phone')
   {
    setPhone(e.target.value);
   }
   else if(e.target.name=='password')
   {
    setPassword(e.target.value);
   }
  }


  const onsubmitHandler=(e)=>{
    e.preventDefault();
    // alert(name+ email +phone +password);
    const data={name , email , phone , password};
    fetch("http://localhost:8000/api/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      const result=JSON.parse(data);
      if(result.status==201)
      {
        alert(result.message);
        //set cookie here
        cookie.set("jwtoken",result.token, {expires : 7200});
      }
      else
      {
        alert(result.message);
      }

      // const cookieStore = cookies()
      // const jsonwebtoken = cookieStore.get(result.token)
      // alert(data);
      
    })
    .catch((error) => {
      console.log('Error : ' , error);
      // alert(data);
    }); 
    
  }

  

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
      <form onSubmit={onsubmitHandler}>
      <CardContent sx={{ boxShadow: 1,
          width: '20rem',
          height: '25rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',}}>
      <Typography sx={{ fontSize: 18 , textDecoration: 'underline' }} color="text.primary" gutterBottom>Sign Up</Typography>
      <TextField required id="outlined-required" sx={{pb:2}} label="Name" onChange={onchangeHandler} name='name' value={name} />
      <TextField required id="outlined-required" sx={{pb:2}} label="Email" name='email' onChange={onchangeHandler} value={email} />
      <TextField required id="outlined-required" sx={{pb:2}} label="Phone" name='phone' onChange={onchangeHandler} value={phone} />
      <TextField required id="outlined-required" sx={{pb:2}} label="Create Password" name='password' onChange={onchangeHandler} value={password} />
      <Button type="submit" variant="contained" color="success" >Submit</Button>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Already a member ?<Link href="signin" >Sign In</Link> </Typography>
    </CardContent>
    </form>
    

      </main>
    </>
  )
}
