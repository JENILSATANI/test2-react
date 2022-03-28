
  
/* eslint-disable default-case */
import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField } from '@material-ui/core'
import { Button } from 'react-bootstrap'
import { useParams, useHistory, Link } from "react-router-dom"
import axios from 'axios'
import { omit } from 'lodash'
const Om = () => {
    const [name, setName] = useState(true);
    const [email, setEmail] = useState(true);
    const [password, setPassword] = useState(true);
    const [phone, setphone] = useState(true)
    const [profile, setProfile] = useState([]);

    let history = useHistory()
    const [errors, setErrors] = useState('');
    const [values, setValues] = useState({
        username: '',
        email: "",
        phone: "",
        password: '',
        profile:""
    })
    const { id } = useParams()

    const validate = (event, name, value) => {

        switch (name) {
            case 'username':
                if (
                    !new RegExp(/^(([a-zA-Z]{3,20})+[ ]+([a-zA-Z]{3,20})+)+$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        username: 'Name must be at least 3 characters, max 30, no special characters or numbers, must have space in between name.'
                    })
                } else {

                    let newObj = omit(errors, "username");
                    setErrors(newObj);

                }
                break;
            case 'email':
                if (
                    // eslint-disable-next-line no-useless-escape
                    !new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;
            case 'phone':
                if (
                    !new RegExp(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        phone: 'Mobile number must be 10 digits.'
                    })
                } else {

                    let newObj = omit(errors, "phone");
                    setErrors(newObj);

                }
                break;
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;

        }
    }

    const handleChange = (event) => {
        event.persist();
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        setValues({
            ...values,
            [name]: val,
        })
        // setProfile

    }
    const postdata =(e) => {
        e.preventDefault()
        let FD = new FormData();
            FD.append('username' , values.username)
            FD.append('mobilenumber' , values.phone)
            FD.append('email' , values.email)
            FD.append('password' , values.password)
            FD.append('photo' , profile[0])
            console.log("ss",profile)

            console.log(FD)
            axios.post("https://medicinesinfo.herokuapp.com/per", FD).then((res) => {
                console.log("updare", res)
            })
            history.push('/')
        }


    
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }


    return (
        <div> {id}
            <Grid>

                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2> Registation Form</h2>
                    </Grid>
                    <form>
                        <TextField name='username' fullWidth label='username' value={values.username} onChange={handleChange} error={Boolean(errors.username)} helperText={errors.username} />
                        <TextField name='phone' fullWidth label='phone' value={values.phone} onChange={handleChange} error={Boolean(errors.phone)} helperText={errors.phone} />
                        <TextField name='email' fullWidth label='Email' value={values.email} onChange={handleChange} error={Boolean(errors.email)} helperText={errors.email} />
                        <TextField name='password' fullWidth label='password' value={values.password} onChange={handleChange} error={Boolean(errors.password)} helperText={errors.password} />
                        <br />
                        <input placeholder='profile' type='file' name='photo' onChange={(e) => setProfile(e.target.files)} />

                        <br />
                        <Grid align='center'>
                            <Button type='submit' class='btn btn-info' onClick={postdata}>Submit</Button>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Om
