import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  font-family: 'Nanum Gothic', sans-serif;
  background: white;
  height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1000px) / 2);
  z-index: 10;
`;
export const NavLink = styled(Link)`
  color: #0079c0;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const NavLogoText = styled.div`
  color: #0079c0;
  margin-left: 8px;
  font-size: 22px;
`;
export const NavOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 55px;
  background: rgba(0, 0, 0, 80%);
  z-index: 1;
  opacity: 1;
  transition: all 0.2s ease;
`;
export const NavLinkOpen = styled(Link)`
  color: white;
  /* font-weight: bold; */
  font-size: 25px;
  text-align: center;
  padding: 2.2rem;
  cursor: pointer;
  text-decoration: none;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 1023px) {
    color: black;
    display: block;
    /* position: absolute; */
    /* top: 0; */
    /* right: 0; */
    /* transform: translate(-100%, 70%); */
    margin: auto 13.1px auto 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
