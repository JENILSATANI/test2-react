/* eslint-disable default-case */
/* eslint-disable no-useless-escape */

import React, { useState } from 'react'
import { Grid, Paper, TextField } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import { omit } from 'lodash'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function Login() {

    let history = useHistory()
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    const [errors, setErrors] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })

    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }

    const handleChange = (event) => {
        event.preventDefault();
        event.persist();
        let name = event.target.name;
        let val = event.target.value;
        validate(event, name, val);
        setValues({
            ...values,
            [name]: val,
        })
    }

    function postdata(e) {
        handleClick()
        e.preventDefault();
        let item = {
            email: values.email,
            password: values.password
        }
        console.log(item)
        axios.post("http://localhost:9900/login", item).then((res) => {
            console.log("updare", res)
            if (res.data.success === true) {
                localStorage.setItem("token", res.data.token)
                history.push('/Mlist')
            }        
        })
        
    }
    const handleClick = (Transition) => {
        setTransition(() => Transition);
        console.log("hvj");
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false);
    };
    const validate = (event, name, value) => {
        switch (name) {
            case 'email':
                if (
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
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }

    return (
        <div>

            <Grid>

                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2> Login Form</h2>
                    </Grid>
                    <form>
                        <TextField name='email'
                            variant='filled'
                            fullWidth label='email'
                            value={values.email}
                            onChange={handleChange}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                        />
                        <TextField name='password'
                            variant='filled'
                            fullWidth label='password'
                            value={values.password}
                            onChange={handleChange}
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                        />
                        <br />
                        <br />
                        <Grid align='center'>
                            <Button type='submit' onClick={postdata}>
                             Submit
                             <Snackbar
                                        open={open}
                                        onClose={handleClose}
                                        TransitionComponent={transition}
                                        message="email and password required"
                                        key={transition ? transition.name : ''}
                                    />
                            </Button>
                        </Grid>
                        <br />
                        <Grid align='center'>
                            <Link to='/Reg'>New Register</Link>
                        </Grid>
                        <br />
                        <Grid align='center'>
                            <Link to='/Fp'>Forgot Password</Link>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login