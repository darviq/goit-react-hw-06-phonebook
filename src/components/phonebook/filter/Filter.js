import React, {useState} from "react";
import styled from "styled-components";

const Div = styled.div`
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
`;

const Filter = ({addFilter}) => {
    const [state, setState] = useState({
        value: "",
    });

    const inputHandler = e => {
        setState({value: e.target.value});
        addFilter(e.target.value);
    };

    return (
        <Div>
            <label>
                Find contacts by name
                <input type="text" value={state.value} name="filter" onChange={inputHandler} />
            </label>
        </Div>
    );
};

export default Filter;
