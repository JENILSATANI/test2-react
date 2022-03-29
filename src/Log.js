/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable default-case */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { Grid, Paper, TextField, IconButton, InputAdornment } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import { omit } from 'lodash'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Log() {
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
    const [password, setpassword] = useState(false)

    const [errors, setErrors] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const handleChange = (event) => {
        event.preventDefault();
        event.persist();
        let name = event.target.name;
        let value = event.target.value;

        validate(event, name, value);
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleonclick = () => {
        setpassword(!password)
    }
    const handleonmousedown = () => {
        setpassword(!password)
    }
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
    function postdata(e) {

        e.preventDefault();
        let item = {
            email: values.email,
            password: values.password
        }
        console.log(item)
        axios.post("https://medicinesinfo.herokuapp.com/login", item).then((res) => {
            console.log("updare", res)
            if (res.data.success === true) {
                localStorage.setItem("token", res.data.token)
                // history.push('/Userlist')
                window.location.reload(true);
            }
        })

    }
    return (
        <div>
            <section className="vh-100" style={{ backgroundcolor: "#9A616D" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderradius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form"
                                            className="img-fluid" style={{ borderradius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <Grid>

                                                <form>

                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                        <span className="h1 fw-bold mb-0">Medicine Management App</span>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterspacing: "1px" }}>Sign into your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <TextField
                                                            id="outlined-basic"
                                                            fullWidth label='email'
                                                            name='email'
                                                            variant="outlined"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            error={Boolean(errors.email)}
                                                            helperText={errors.email}
                                                        />
                                                    </div>
                                                    <Grid>

                                                        <div className="form-outline mb-4">
                                                            <TextField type="password"
                                                                name='password'

                                                                fullWidth label='password'
                                                                variant="outlined"
                                                                value={values.password}
                                                                type={password ? 'text' : 'password'}
                                                                onChange={handleChange}
                                                                error={Boolean(errors.password)}
                                                                helperText={errors.password}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position='end'>
                                                                            <IconButton

                                                                                onClick={handleonclick}
                                                                                onMouseDown={handleonmousedown}
                                                                            >
                                                                                {password ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    )
                                                                }} />
                                                        </div>
                                                    </Grid>
                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={postdata}>Login</button>
                                                    </div>

                                                    <a className="small text-muted" href="Fp">Forgot password?</a>
                                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="reg" style={{ color: "#393f81" }}>Register here</a></p>
                                                    <a href="#!" className="small text-muted">Terms of use.</a>
                                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                                </form>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Log