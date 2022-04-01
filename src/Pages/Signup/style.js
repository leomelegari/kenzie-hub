import styled, { keyframes } from "styled-components";


const appearFromTop = keyframes`

    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }

`
export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 296px;
    height: 100vh;
    padding: 33px 17px;
    animation: ${appearFromTop} 0.7s;
    @media (min-width: 375px) {
        width: 369px;
    }

    @media (min-width: 425px) {
        width: 369px;
    }

    .signup-header {
        width: 296px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        @media (min-width: 425px) {
            width: 335px;
        }

        img {
            width: 140px;

        @media (min-width: 425px){
            width: 180px;
        }
    }

        button {
            width: 79px;
            height: 30px;
            background-color: var(--grey-3);
            transition: 0.3s;

            :hover {
                background-color: var(--grey-2);
            }
        }
    }
    `

export const BoxLogin = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 296px;
    height: fit-content;
    background-color: var(--grey-4);
    border-radius: 3px;
    padding: 10px 0;
    @media (min-width: 425px){
        width: 100%;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        height: fit-content;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        
        h1 {
            font-size: 20px;
            text-align: center;
            margin-bottom: 15px;

            @media (min-width: 425px) {
                font-size: 25px;
            }
        }
    }

    span {
        font-size: 13px;
        font-weight: 600px;
        color: var(--grey-2);
    }

    button {
        margin-top: 25px;
        background-color: var(--color-primary-negative);
        font-size: 15px;
        transition: 0.3s;

        :hover {
            background-color: var(--negative);
        }
    }

    @media (min-width: 425px) {
        button {
            width: 300px;
            font-size: 18px;
        }
    }

`

export const ContainerInput = styled.div`

    display: flex;
    flex-direction: column;
    padding: 8px 0;

    span {
        color: var(--negative);
    }

    select {
        color: var(--grey-1)
    }

    @media (min-width: 425px) {
        input, select {
            width: 300px;
        }
    }

    label {
        text-align: start;
        margin: 0 0 13px 0;
        font-size: 13px;
        font-weight: 400;
        color: var(--grey-1);

        @media (min-width: 425px) {
            font-size: 14px;
        }
    }

`