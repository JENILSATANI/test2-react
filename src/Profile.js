import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
export default function Pp() {
    const { id } = useParams();
    let history = useHistory();
    const [name, setName] = useState("data");
    const [email, setemail] = useState("data");
    const [phonenumber, setphonenumber] = useState("data");
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        data()
    }, [])




    function data() {
        let token = localStorage.getItem("token");

        axios.get(`https://medicinesinfo.herokuapp.com/user`, { headers: { 'x-access-token': token } }).then((res) => {
            setName(res.data.data.username)
            setemail(res.data.data.email)
            setphonenumber(res.data.data.mobilenumber)
            setProfile(res.data.data.photo_path)
            console.log("hbhj", res)
        })
    }

    const postData = () => {
        let token = localStorage.getItem("token");

        let FD = new FormData();
        FD.append('username', name);
        FD.append('email', email)
        FD.append('mobilenumber', phonenumber)
        FD.append('photo', profile[0]);
        console.log("profile", profile);
        axios.put(`https://medicinesinfo.herokuapp.com/user`, FD, { headers: { 'x-access-token': token } })
        history.push('/Userlist')

    }
    function logout() {
        localStorage.clear()
        setTimeout(() => {

            history.push('/')
        }, 1000);
    }

    return (
        <div>

            <div className='Container'>
                <img src={profile} alt='' height='100' width='100'></img>
                <form>
                    {data}
                    <div>
                        <TextField value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant='standard'
                            label='Username'
                        />
                    </div>
                    <br />
                    <div>
                        <TextField value={email}
                            onChange={(e) => setemail(e.target.value)}
                            variant='standard'
                            label='email'
                        />
                    </div>
                    <br />
                    <div>
                        <TextField value={phonenumber}
                            onChange={(e) => setphonenumber(e.target.value)}
                            variant='standard'
                            label='Mobilenumber'
                        />
                    </div>
                    <br />
                    <input placeholder='profile' type='file' name='photo' onChange={(e) => setProfile(e.target.files)} />
                    <br />
                    <br />
                    <button onClick={postData} className="bg-primary" type='submit'>Submit</button><span></span>
                    <button className="bg-primary" onClick={logout}>Logout</button>

                </form>
            </div>
        </div>
    )
}
