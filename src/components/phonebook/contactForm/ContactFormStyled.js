import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 25px;

    label {
        display: block;
    }

    input {
        display: block;
        width: 100%;
        height: 26px;
    }

    button {
        width: 100%;
        height: 26px;
        margin-top: 10px;
        background-color: honeydew;
    }

    button:hover,
    button:focus {
        background-color: lightgreen;
    }
`;

export default Form;
