import styled from "styled-components";


export const Layout = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;

    .btn-text{
        text-transform: capitalize;
        font-weight: 600;
        letter-spacing: 0.8px;
        font-size: 16px;

        span{
            padding: 0 18px;
        }
    }
`

export const HeaderTitle = styled.div`
    text-align: left;
    font-weight: 600;
`