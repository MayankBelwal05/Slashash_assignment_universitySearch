import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function NavbarUp({ setData }) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://universities.hipolabs.com/search`, {
                    params: {
                        country: 'india',
                        limit: 20
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        
        fetchData();
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://universities.hipolabs.com/search`, {
                params: {
                    country: 'india',
                    name: search,
                    limit: 20
                }
            });
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Navbar expand="lg" style={{ backgroundColor: 'blue', color: 'white' }}>
            <Container fluid>
                <Navbar.Brand href="#"><h2>University</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to='fav' style={{ color: 'white' }}>Favourite Universities</Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ backgroundColor: 'lightyellow', color: 'black' }}
                        />
                        <Button type="submit" variant="outline-success" style={{ borderRadius: '20px' ,backgroundColor: 'yellow',color: 'black'}}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarUp;
