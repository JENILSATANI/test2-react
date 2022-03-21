import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
export default function Pp() {
    const { id } = useParams();
    let history = useHistory();

    const [name, setName] = useState('');
    const [price, setprice] = useState('');
    const [quantities, setquantities] = useState('');
    const [description, setdescription] = useState('')
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        data()
    }, [])


    function data() {
        axios.get(`http://localhost:9900/get/${id}`).then((res) => {
            setName(res.data.data.name)
            setprice(res.data.data.price)
            setquantities(res.data.data.quantities)
            setdescription(res.data.data.description)
            setProfile(res.data.data.photo_path)
            console.log("hbhj", res)
        })
    }



    const postData = () => {
        let FD = new FormData();
        FD.append('name', name);
        FD.append('quantities', quantities);
        FD.append('description', description)
        FD.append('price', price);
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
                            label='name'
                        />
                    </div>
                    <br />
                    <div>
                        <TextField value={quantities}
                            onChange={(e) => setquantities(e.target.value)}
                            variant='standard'
                            label='quantities'
                        />
                    </div>
                    <br />
                    <div>
                        <TextField value={description} 
                        onChange={(e) => setdescription(e.target.value)} 
                        variant='standard'
                        label='description'
                        />
                    </div>
                    <br />
                    <div>
                        <TextField value={price}
                         onChange={(e) => setprice(e.target.value)} 
                         variant='standard'
                         label='price'
                        />
                    </div>
                    <br />
                    <input placeholder='profile' type='file' name='photo' onChange={(e) => setProfile(e.target.files)} />
                    <br />
                    <br />

                    <Button onClick={postData} type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}
