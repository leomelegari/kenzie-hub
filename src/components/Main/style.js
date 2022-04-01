import styled from "styled-components";

export const MainDiv = styled.div`

    width: 95%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const MainHeaderDiv = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    button {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--grey-3);
        transition: 0.3s;

        :hover {
            background-color: var(--grey-2);
        }
    }

`

export const TechCard = styled.div`

    width: 100%;
    height: 500px;
    overflow-y: scroll;
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 10px 8px;

`