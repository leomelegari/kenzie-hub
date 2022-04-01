import styled, { keyframes } from "styled-components";


const appearFromTop = keyframes`

    from {
        opacity: 0;
        transform: translateY(-50px);
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
    margin: 0 auto;
    animation: ${appearFromTop} 0.7s;
    @media (min-width: 425px) {
        width: 369px;
    }

    img {
        width: 150px;
        margin-bottom: 15px;

        @media (min-width: 425px){
            width: 180px;
        }
    }

    `

export const BoxLogin = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 296px;
    background-color: var(--grey-4);
    border-radius: 3px;
    @media (min-width: 425px){
        width: 100%;
    }

    :nth-child(2) {
        display: flex;
        padding: 30px 0;
        
        h1 {
            font-size: 20px;

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
        font-size: 15px;
    }

    button:nth-child(4) {
        margin-bottom: 35px;
        font-size: 15px;
        transition: 0.3s;

        :hover {
            background-color: var(--color-primary-negative);
        }
    }

    a button {
        margin-top: 25px;
        background-color: var(--grey-2);
        transition: 0.3s;

        :hover {
            background-color: var(--grey-3);
        }
    }

    @media (min-width: 425px) {
        button {
            width: 300px;
            font-size: 18px;
        }

        button:nth-child(4) {
            font-size: 18px;
        }
    }

`

export const ContainerInput = styled.div`

    display: flex;
    flex-direction: column;
    padding: 8px 0;
    :nth-child(3) {
        margin-bottom: 10px;
    }
    span {
        color: var(--negative);
    }
    @media (min-width: 425px) {
        input {
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