import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Hedings from './Hedings'
function Login() {
    const [email, setEmail] = useState("");
    const [upass, setPass] = useState("");
     var item=upass;
    const history = useHistory();
    function Login() {
        fetch("http://localhost:3000/register?q="+item).then((res) => {
            res.json().then((result) => {
                if (result.length > 0) {
                      alert("Login succses"); 
                      console.log(result);
                      //history.push('/search');
                }
                else {
                    alert("Login fail")
                }
            })
        })
    }
    return(
        <>
        <Hedings />
            <div>
                <h1>Login</h1><br/>
                <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <input type="passwored" value={upass} placeholder="Enter passwored"onChange={(e)=>setPass(e.target.value)}/><br/><br/>
                <Button size="lg" block variant="secondary" onClick={Login}>Login</Button>
            </div>
        </>
    );
}
export default Login