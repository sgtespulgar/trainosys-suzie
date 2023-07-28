import LoginComponent from "../LoginComponent/LoginComponent";
import NavigationComponent from "../NavigationComponent/NavigationComponent";

const LandingComponent : React.FC = () => {
    return(
        <>
            <NavigationComponent />
            <LoginComponent />
        </>
    )
}

export default LandingComponent;