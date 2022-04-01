import styled, {keyframes} from "styled-components";


const appearFromNoWhere = keyframes`

    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }

`

export const CardDiv = styled.div`

    width: 100.5%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    margin: 7px 0;
    margin-left: 1.5px;
    align-items: center;
    background-color: var(--grey-4);
    border-radius: 4px;
    color: var(--grey-2);
    cursor: pointer;
    transition: 0.3s;
    animation: ${appearFromNoWhere} 0.3s;
    :hover {
        background-color: var(--grey-2);
        color: var(--grey-1);
    }

    h1 {
        font-size: 14px;
    }

    span {
        font-size: 12px;
    }
`

export const Img = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-top: 35px;
        text-align: center;
        font-weight: 500;
        font-style: italic;

        @media (min-width: 425px) {
            font-size: 25px;
            font-weight: 300;
        }
    }

`