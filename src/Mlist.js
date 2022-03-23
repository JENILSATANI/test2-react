/* eslint-disable jsx-a11y/anchor-is-valid */
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Copy() {
    let history = useHistory();
    const [user, setuser] = useState([])
    useEffect(() => {
        data()
    }, [])

    function data() {
        // let token = localStorage.getItem("token");

        axios.get(`http://localhost:9900/`)
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
        axios.delete(`http://localhost:9900/${_id}`).then((result) => {
            console.log("result.data", result);
        })

    }
    function updateuser(_id) {
        console.log(_id);
        history.push(`/Editmedicine/${_id}`);

    }

    const columns = [
        {
            title: 'name', field: "name"
        },
        {
            title: "medicine Image", field: "photo_path", render: (rowData) => <img src={rowData.photo_path} style={{ width: 60, height: 60 }} alt='' />,

        },
        {
            title: "description", field: "description"

        },
        {
            title: "quantities", field: "quantities"

        },
        {
            title:"price" , field:"price"
        }
    ]

    const adduser =()=>{
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
              <a class="nav-link" href="/">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Userlist">User List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Mlist">Medicine List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Profile">My-Profile</a>
            </li>
          </ul>
        </div>
      </nav>
        <div>

            <MaterialTable title=" Material Table"

                data={user}
                columns={columns}

                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit User',
                        editable: "rowData",
                        onClick: (event, rowData) => updateuser(rowData._id),


                    },

                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    },
                    {
                        icon: 'add',
                        tooltip: 'Add Medicine',
                        isFreeAction: true ,
                        onClick: (event, rowData) => adduser(rowData.from)
                      }
                ]}
            />


        </div>
        </div>
    )
}




export default Copy