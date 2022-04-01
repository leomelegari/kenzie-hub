import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        /* grey scale */
        --grey-1: #f8f9fa;
        --grey-2: #868e96;
        --grey-3: #343b41;
        --grey-4: #212529;
        --grey-5: #121214;

        /* feedback palette */
        --sucess: #3fe864;
        --negative: #e83f5b;

        --toastify-color-dark: #343B41 !important;
    }

    body {
        background-color: var(--grey-5);
        display: flex;
        width: 100%;
        min-height: 100vh;
        justify-content: center;
        /* overflow: hidden; */
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
    }

    h1, h2, h3 {
        font-weight: bold;
        font-size: 16px;
        color: var(--grey-1);
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #f8f9fa #343b41;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 3px;
    border: 0px none transparent;
  }
`