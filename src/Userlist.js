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


    const columns = [
        {
            title: 'name', field: "name"
        },
        {
            title: "email", field: "email",

        },
        {
            title: "mobilenumber", field: "mobilenumber"

        }
    ]

   
    return (

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
    )
}




export default Copy