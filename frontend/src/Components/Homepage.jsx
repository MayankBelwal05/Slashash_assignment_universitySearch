import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Homepage({ data }) {
    console.log(data);
    const handleAdd = async (item) => {
        console.log(item);
        const data = await axios.post("http://localhost:2500/university", {
            country: item.country,
            name: item.name,
            state_province: item["state-province"],
            web_pages: item.web_pages
        });
    }

    return (
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
                    <th>Web Pages</th><th>Name</th><th>Country</th><th>State/Province</th><th>Favourite</th>
                </tr>
            </thead>

         <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td><a href={item.web_pages}>{item.web_pages}</a></td>
                        <td>{item.name}</td>
                        <td>{item.country}</td>
                        <td>{item["state-province"]}</td>
                        <td> <button onClick={() => handleAdd(item)} style={{ borderRadius: '20px' ,backgroundColor: 'lightgreen',color: 'black'}}>Add to Favourite</button></td>
            </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Homepage;
