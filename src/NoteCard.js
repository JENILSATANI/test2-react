import { Button, Card, CardActions, CardContent, CardHeader, IconButton } from '@material-ui/core'
import { DeblurOutlined, DeleteOutline, Favorite } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

function NoteCard({ note, handleclick }) {
    return (
        <div>
            <Card style={{ width: "100%", height: "100%" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleclick(note._id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.name}
                />

                <CardContent>   
                    <Typography>
                        <img src={note.photo_path} alt='' />
                    </Typography><Typography>
                        {note.description}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>

                        price: {note.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large">Know More</Button>

                </CardActions>

            </Card>

        </div>
    )
}

export default NoteCard
