type PropsTypeButton = {
    text : string
}
function Button(props : PropsTypeButton){
    return(
            <button>{props.text}</button>
    )
}

export default Button;