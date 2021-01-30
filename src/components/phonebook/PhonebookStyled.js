import styled from "styled-components";
import transition from "styled-transition-group";

const Div = styled.div`
    width: 300px;
    margin-left: 25px;

    h2 {
        margin-top: 10px;
        text-align: center;
    }
`;

const H1 = transition.h1`
    text-align: center;

    &:appear {
        transform: translateX(-100%);
    }
    &:appear-active {
        transform: translateX(0);
        transition: transform 500ms;
    }
`;

export {Div, H1};
