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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Medicine Management Task</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="Profile">Logout</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Userlist">User List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Profile">My-Profile</a>
                        </li>
                        <a
                                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    class="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                    </ul>
                </div>
            </nav>
            <Container>
                <Grid container spacing={3}>
                    {user.map(user => (
                        <Grid item key={user.id} xs={12} md={6} lg={4}>
                            <NoteCard note={user} handleclick={deleteuser} />

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