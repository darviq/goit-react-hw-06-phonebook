import transition from "styled-transition-group";

const Li = transition.li`
    width: 100%;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:enter {
        transform: translateX(-120%);
    }
    &:enter-active {
        transform: translateX(0);
        transition: transform 250ms;
    }
    &:exit {
        transform: translateX(0);
    }
    &:exit-active {
        transform: translateX(-120%);
        transition: transform 250ms;
    }

    button {
        background-color: hotpink;
        font-weight: 700;
        width: 30px;
        height: 30px;

        :hover,
        :focus {
            background-color: red;
        }
    }
`;

const ContactItem = ({name, number, id, removeContact}) => {
    return (
        <>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" data-id={id} onClick={removeContact}>
                &#x2715;
            </button>
        </>
    );
};

export {ContactItem, Li};
