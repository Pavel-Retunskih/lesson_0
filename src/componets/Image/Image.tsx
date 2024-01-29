type PropsType = {
    src : string
}

function Img(props :PropsType){
    return(
        <div>
            <img src={props.src} alt="main image" />
        </div>
    )
}

export default Img;