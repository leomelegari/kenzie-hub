import styled from "styled-components";

export const NavBar = styled.div`

    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 65px;
    max-width: 768px;

    img {
        width: 150px;

        @media (min-width: 425px) {
            width: 180px;
        }
    }

    button {
        text-align: center;
        width: 55px;
        height: 32px;
        background-color: var(--grey-3);
        transition: 0.3s;

        :hover {
            background-color: var(--grey-2);
        }
    }

`