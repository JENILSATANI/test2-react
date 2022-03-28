/* eslint-disable jsx-a11y/anchor-is-valid */
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Container, Grid, Paper } from '@material-ui/core';
import NoteCard from './NoteCard';
function Copy() {
    let history = useHistory();
    const [user, setuser] = useState([])
    useEffect(() => {
        data()
    }, [])

    function data() {

        axios.get(`https://medicinesinfo.herokuapp.com/ML`)
            .then(res => {
                console.log(res)
                const tableData = res.data.data
                // const array = [];
                //  array.push(tableData);
                setuser(tableData)
                console.log(user)

            })

    }
    function deleteuser(_id) {
        console.log(_id);
        axios.delete(`https://medicinesinfo.herokuapp.com/${_id}`).then((result) => {
            console.log("result.data", result);
            data()

        })

    }
    function updateuser(_id) {
        console.log(_id);
        history.push(`/Editmedicine/${_id}`);

    }

    // const columns = [
    //     {
    //         title: 'name', field: "name"
    //     },
    //     {
    //         title: "medicine Image", field: "photo_path", render: (rowData) => <img src={rowData.photo_path} style={{ width: 60, height: 60 }} alt='' />,

    //     },
    //     {
    //         title: "description", field: "description"

    //     },
    //     {
    //         title: "quantities", field: "quantities"

    //     },
    //     {
    //         title:"price" , field:"price"
    //     }
    // ]

    const adduser = () => {
        history.push('/addmedicine');

    }

    return (

        <div>
            <Container>
                <Grid container spacing={3}>
                    {user.map(user => (
                        <Grid item key={user.id} xs={12} md={6} lg={4}>
                          <NoteCard note={user} handleclick={deleteuser}/>

                        </Grid>
                    ))}
                </Grid>
            </Container>



           
                </div>
// {/* 
//             <MaterialTable title=" Material Table"

//                 data={user}
//                 columns={columns}

//                 actions={[
//                     {
//                         icon: 'edit',
//                         tooltip: 'Edit User',
//                         editable: "rowData",
//                         onClick: (event, rowData) => updateuser(rowData._id),


//                     },

//                     {
//                         icon: 'delete',
//                         tooltip: 'Delete User',
//                         onClick: (event, rowData) => deleteuser(rowData._id)

//                     },
//                     {
//                         icon: 'add',
//                         tooltip: 'Add Medicine',
//                         isFreeAction: true ,
//                         onClick: (event, rowData) => adduser(rowData.from)
//                       }
//                 ]}
//             /> */}


//         </div>
//         </div>
    )
}




export default Copy