import styled, { keyframes } from "styled-components";

const appearFromNoWhere = keyframes`

    from {
        opacity: 0;
        transform: scale(0)
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

`

export const Animation = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    animation: ${appearFromNoWhere} 0.3s;

`

export const Line = styled.hr`

    width: 100%;
    border: 1px solid var(--grey-3);
    opacity: 0.3;
`