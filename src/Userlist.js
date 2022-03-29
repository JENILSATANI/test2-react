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

        axios.get(`https://medicinesinfo.herokuapp.com/users`, { headers: { 'x-access-token': token } })
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
        axios.delete(`https://medicinesinfo.herokuapp.com/de/${_id}`, { headers: { 'x-access-token': token } }).then((result) => {
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
        // {
        //     title: "mobilenumber", field: "mobilenumber"

        // },
        {
            title: "User Image", field: "photo_path", render: (rowData) => <img src={rowData.photo_path} style={{ width: 60, height: 60 }} alt='' />,

        },
    ]


    return (


            <div>
             
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