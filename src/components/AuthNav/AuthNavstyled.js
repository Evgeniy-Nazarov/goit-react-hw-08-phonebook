import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavDivStyled = styled.div`
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
`;

export const AuthNavRegisterStyled = styled(NavLink)`
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

export const AuthNavLoginStyled = styled(NavLink)`
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


