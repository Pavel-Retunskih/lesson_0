type PropsType = {
    text: string
}
function Title(props :PropsType){
    return(
        <h1>{props.text}</h1>
    )
}

export default Title;