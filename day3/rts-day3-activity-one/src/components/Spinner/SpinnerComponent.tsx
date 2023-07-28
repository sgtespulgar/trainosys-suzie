import spinner from "../../assets/pikachu_loading.gif"

export const SpinnerComponent : React.FC = () => {
    return(
        <div>
            <img
                src={spinner}
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    )
}
