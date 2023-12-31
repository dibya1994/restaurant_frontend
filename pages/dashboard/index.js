import Head from 'next/head'
import * as React from 'react';
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
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import cookie from "js-cookie";
import { redirect } from 'next/navigation';



const inter = Inter({ subsets: ['latin'] })



export default function index() {
  

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));


  

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

    <Typography sx={{ fontSize: 18, m:4 }} color="text.primary" gutterBottom>Welcome! Dibya</Typography>

    
      <main className={`${styles.main} ${inter.className}`}>

      
      <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, p:2 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
            <Item>xs=8</Item>
            </Grid>
        </Grid>
        </Box>
      </Container>
      
      

      </main>
    </>
  )
}
