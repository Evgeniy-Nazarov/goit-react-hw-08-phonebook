import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavigationStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #2196f3;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const NavigationLinkstStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    text-decoration: none;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color: #000;
        background-color: #fff;
        border-radius: 4px;
    }
`;
