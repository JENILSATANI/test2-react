/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, Card, CardActions, Button, CardContent, CardHeader, IconButton } from '@material-ui/core'
import { DeblurOutlined, DeleteOutline, Favorite } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import { red ,pink} from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link, useHistory } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useCart} from 'react-use-cart';
import { add } from 'lodash';
import { typography } from '@mui/system';
const NoteCard= ({note, handleclick,additem}) =>{
    let history = useHistory()
    const [myArray, setMyArray] = useState([]);

    const [itemCount, setItemCount] = React.useState(1);
        //  const {additem} = useCart
        function addmedicine(){
            history.push('/addmedicine')
        }
    return (
        <div>
            <Card style={{ width: "100%", height: "100%" }}>

                    <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                        M
                    </Avatar>
                <CardHeader
                    // action={
                    //     <IconButton onClick={() => handleclick(note._id)}>
                    //         <DeleteOutline />
                    //     </IconButton>
                    // }
                    title={note.name}
                />

                <CardContent>
                    <Typography>
                        <img src={note.photo_path} alt='' style={{ width: "227px" ,height: "164px" }} />
                    </Typography>
                    <br/>
                    <Typography style={{backgroundColor:"ButtonHighlight", fontStyle:"italic"}}>
                        {note.description}
                    </Typography>
                    <br/>
                    <Typography style={{fontSize:"25px"}} color="text.primary" gutterBottom>

                        price:{note.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid align='center'>
                    <button className='btn btn-success'onClick={addmedicine}>Add Medicine</button>
                    </Grid>
                    <Grid align='center'>
                   <button className='btn btn-success' onClick={() => additem(note)}>Add to Cart</button>
                    </Grid>
                </CardActions>

            </Card>

        </div>
    )
}

export default NoteCard
