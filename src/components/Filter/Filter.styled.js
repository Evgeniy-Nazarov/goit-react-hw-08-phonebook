import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FilterSpanStyled = styled.span`
font-size: 20px;
    margin-bottom: 20px;
`;

export const FilterLabelStyled = styled.label`
    display: block;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
`;

export const FilterInputStyled = styled.input`
    display: block;
    width: 300px;
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid #2196f3;
    border-radius: 4px;
    align-items: center;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
        border-color: #ff6b08;
        box-shadow: 0px 0px 8px 0px rgba(255, 107, 8, 0.5);
        outline: none;
    }
`;