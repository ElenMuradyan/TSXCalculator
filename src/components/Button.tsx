import { FC } from "react"

interface I_Button{
    onClick: () => void,
    label: string
};

const Button: FC<I_Button> = ({onClick, label}) => {
    return(
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;