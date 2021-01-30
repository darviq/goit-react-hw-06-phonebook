import transition from "styled-transition-group";

const Div = transition.div`
    position: absolute;
    top: 26px;
    left: 70px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: hotpink;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    height: 50px;
    vertical-align: center;


    &:enter {
        transform: translateX(-150%);
    }
    &:enter-active {
        transform: translateX(0);
        transition: transform 250ms;
    }
    &:exit {
        transform: translateX(0);
    }
    &:exit-active {
        transform: translateX(-150%);
        transition: transform 250ms;
    }
`;

const Notification = ({notif}) => {
    return (
        <Div in={notif} timeout={250} unmountOnExit>
            Contact already exists!
        </Div>
    );
};

export default Notification;
