import styled from 'styled-components';

const Box = styled.div`
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;

    padding: 16px;
    
    .boxLink{
        font-size: 14px;
        color: #2e7004;
        text-decoration: none;
        font-weight: 800;
    }

    .title{
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .subTitle{
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .smallTitle{
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
        margin-bottom: 20px;
    }

    hr{
        margin: 12px 0 8px;
        background-color: transparent;
        border-bottom-color: #ECF2F4;
    }

    input{
        width: 100%;
        background-color: #F4F4F4;
        color: #333333;
        border: 0;
        padding: 14px 16px;
        margin-bottom: 14px;
        border-radius: 10000px;
        ;;placeholder{
            color: #333333;
            opacity: 1;
        }
    }

    button{
        border: 0;
        padding: 8px 12px;
        color: #ffffff;
        border-radius: 10000px;
        background-color: #GF9288;
    }
`;

export default Box;