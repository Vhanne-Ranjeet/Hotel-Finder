import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Hedings from './Hedings';
function Register() {
    const[uname,setUname]=useState("");
    const[upass,setPass]=useState("");
    const[email,setEmail]=useState("");
    const history=useHistory();
    function SignUp()
    {
        if(uname==="" || upass===""||email==="")
        {
           alert("please Enter all fields")
           history.push('/Register');
        }
        else
        {
        let item={uname,upass,email}
        fetch("http://localhost:3000/register",{
            method:"Post",
            headers:{
                'content-type':'application/json',
                'Accept':'application/json'
                },
            body:JSON.stringify(item)
        }).then((result)=>{     
            result.json().then((response)=>{
                localStorage.setItem("user-info",JSON.stringify(response));
                history.push("/list");
                alert("Register Sucsessful");
            })
        })
    }
    }
    return (
        <>
        <Hedings />
            <div>
                <h1>Sign Up</h1>
                <input type="text" value={uname} placeholder="Enter name" onChange={(e)=>setUname(e.target.value)}/><br/><br/>
                <input type="passwored" value={upass} placeholder="Enter passwored"onChange={(e)=>setPass(e.target.value)}/><br/><br/>
                <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <Button size="lg" block variant="secondary" onClick={SignUp}>Sign Up</Button>
            </div>
            </>
    );
}
export default Register;