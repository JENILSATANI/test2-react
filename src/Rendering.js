import React,{useState} from 'react'
import { Grid, Paper, TextField } from '@material-ui/core'
import { Link  } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function Login() {


  
    const handleChange = (event) => {
        event.preventDefault();
     
    }

 
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }

    return (
        <div>

            <Grid>

                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2>Forgot Password</h2>
                    </Grid>
                    <form>
                        <TextField name='email'
                            variant='filled'
                            fullWidth label='Email'
                            onChange={handleChange}
                            />
                              <TextField name='password'
                                variant='filled'
                                fullWidth label='password'
                            />
                              <br />
                              <br/>
                            <Grid align='center'>
                                <Button type='submit' class='btn btn-info' ><Link to='/'>submit</Link>
                                </Button>
                            </Grid>
                            
                    </form>
                    </Paper>
                    </Grid>
                </div>
                )
}

                export default Login