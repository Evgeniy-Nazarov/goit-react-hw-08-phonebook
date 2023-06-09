import styled from "styled-components";

export const ContactItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ContactItemButton = styled.button`
 margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color: #fff;
        background-color: #000;
        border-radius: 4px;
    }
`;