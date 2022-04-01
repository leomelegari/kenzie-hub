import styled, { keyframes } from "styled-components";


const appearFromNothing = keyframes`

    from {
        opacity: 0;
        transform: scale(1.1)
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

`

export const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0, 0.7);
    animation: ${appearFromNothing} 0.3s;
`

export const ModalContainer = styled.form`

    width: 300px;
    height: 274px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    
    background-color: var(--grey-4);

`

export const ContainerHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
    height: 40px;
    background-color: var(--grey-3);
    border-radius: 4px 4px 0 0;

    h1 {
        font-size: 13px;
    }
    
    button {
        width: 15px;
        height: 15px;
        background-color: transparent;
        color: var(--grey-1);
    }

`

export const ContainerInput = styled.div`

    display: flex;
    flex-direction: column;
    
    select {
        margin-bottom: 18px;
        color: var(--grey-1);
    }

    label {
        text-align: start;
        margin: 10px 0 13px 0;
        font-size: 11px;
        font-weight: 400;
        color: var(--grey-1);
    }

    span {
        color: var(--negative);
        font-size: 10px;
    }

`


