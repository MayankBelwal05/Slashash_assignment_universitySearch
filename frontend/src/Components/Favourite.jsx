import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function Favourite() {
    const [data, setData] = useState([]);
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:2500/");
            console.log(response.data)
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        
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
                        <th>Web Pages</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>State/Province</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><a href={item.web_pages}>{item.web_pages}</a></td>
                            <td>{item.name}</td>
                            <td>{item.country}</td>
                            <td>{item.state_province}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Favourite;
