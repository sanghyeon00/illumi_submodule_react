import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BsSearch } from "react-icons/bs";

// Styled components 
const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(57, 57, 57, 0.64);
  color: white;
  height: 74px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 53px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  position: relative; 
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px; 
    width: 100%;
    height: 2px; 
    background-color: #e74c3c;
    transition: all 0.3s ease;
    opacity: 0; 
  }

  &:hover::after {
    opacity: 1; 
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 6px 10px;
  margin-left:40px;
  height:30px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px 10px;
  border-radius: 20px 0 0 20px;
  font-size: 14px;
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    color: #333;
  }
`;

const Spacer = styled.div`
  height: 62px; 
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearch = searchTerm.trim().toLowerCase();

    if (trimmedSearch === '프로젝트' || trimmedSearch === 'project') {
      navigate('/projectmain');
    } else {
      alert('No matching page found!');
    }

    setSearchTerm('');
  };
  

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo href="http://127.0.0.1:5500/index.html">
            <LogoImage
              src="./imgs/illumi_logo_re-removebg-preview.png"
              alt="Logo"
            />
          </Logo>
          <Nav>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/product">PRODUCTS</NavLink>
            <NavLink to="/projectmain">PROJECTS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <SearchForm onSubmit={handleSearch}>
              <SearchInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                name="search"
              />
              <SearchButton type="submit">
                <i><BsSearch /></i>
              </SearchButton>
            </SearchForm>
          </Nav>
        </HeaderContainer>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
