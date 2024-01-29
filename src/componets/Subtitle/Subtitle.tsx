type PropsType = {
    text : string
}
function Subtitle(props:PropsType){
    return(
        <p>{props.text}</p>
    )
}

export default Subtitle;