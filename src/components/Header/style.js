import styled from "styled-components";

export const HeaderDiv = styled.div`

    display: flex;
    width: 95%;
    max-width: 768px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 25px 0;
    color: var(--grey-1);
    line-height: 25px;

    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }

    h1 {
        font-size: 18px;
    }

    span {
        font-size: 12px;
        color: var(--grey-2)
    }

`