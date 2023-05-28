import styled from 'styled-components';

export const RegisterFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const InputStyled = styled.input`
    display: block;
    width: 300px;
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid #2196f3;
    border-radius: 4px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
        border-color: #ff6b08;
        box-shadow: 0px 0px 8px 0px rgba(255, 107, 8, 0.5);
        outline: none;
    }
`;

export const ButtonStyled = styled.button`
    display: block;
    width: 300px;
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    background-color: #2196f3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color: #ff6b08;
    }
`;