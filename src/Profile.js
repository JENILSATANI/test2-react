import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
export default function Pp() {
    const { id } = useParams();
    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        data()
    }, [])


    function data() {
        axios.get(`http://localhost:9900/`).then((res) => {
            setName(res.data.data.username)
            setemail(res.data.data.email)
            setphonenumber(res.data.data.mobilenumber)
            setProfile(res.data.data.photo_path)
            console.log("hbhj", res)
        })
    }



    const postData = () => {
        let FD = new FormData();
        FD.append('username', name);
        FD.append('email',email)
        FD.append('mobilenumber',phonenumber)
        FD.append('photo', profile[0]);
        console.log("profile", profile);
        axios.put(`http://localhost:9900/edit/${id}`, FD)
        history.push('/Mlist')

    }

    return (
        <div>
            <div className='Container'>
            <img src={profile} alt='' height='100' width='100'></img>
                <form>
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
  

                    <Button onClick={postData} type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}
