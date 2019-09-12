import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import '../App.sass';
import logo from '../assets/images/Logo_ML.png';
import search from '../assets/images/ic_Search.png';

function Search() {
  return (
    <header className="Search">
      <Container>
        <img className="Logo" src={logo} alt="" />
        <form>
          <input type="text" placeholder="Nunca dejes de buscar" required />
          <Button><img src={search} alt="" /></Button>
        </form>
      </Container>
    </header>
  );
}

export default Search;
