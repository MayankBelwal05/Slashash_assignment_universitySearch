import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function Favourite() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:2500/");

                console.log(response.data.data)
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);
    
    return (
        <>
            <Table 
                striped 
                bordered 
                hover 
                style={{ 
                    backgroundColor: 'lightyellow', 
                    color: 'black', 
                    border: '2px solid black', 
                    fontWeight: 'bold'
                }}
            >
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Name</th>
                        <th>State/Province</th>
                        <th>Web Pages</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.country}</td>
                            <td>{item.name}</td>
                            <td>{item.state_province}</td>
                            <td><a href={item.web_pages}>{item.web_pages}</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Favourite;
