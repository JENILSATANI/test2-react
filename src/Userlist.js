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
        let token = localStorage.getItem("token");

        axios.get(`http://localhost:9900/user`, { headers: { 'x-access-token': token } })
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
        let token = localStorage.getItem("token");
        axios.delete(`http://localhost:9900/de/${_id}`, { headers: { 'x-access-token': token } }).then((result) => {
            console.log("result.data", result);
            data()

        })

    }


    const columns = [
        {
            title: 'username', field: "username"
        },
        {
            title: "email", field: "email"

        },
        {
            title: "mobilenumber", field: "mobilenumber"

        },
        {
            title: "User Image", field: "photo_path", render: (rowData) => <img src={rowData.photo_path} style={{ width: 60, height: 60 }} alt='' />,

        },
    ]


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
                    <MaterialTable title=" User List"

                        data={user}
                        columns={columns}

                        actions={[
                            {
                                icon: 'delete',
                                tooltip: 'Delete User',
                                onClick: (event, rowData) => deleteuser(rowData._id)

                            }
                        ]}
                    />


                </div>
            </div>
            )
}




            export default Copy