type PropsType = {
    src : string
}

function Img(props :PropsType){
    return(
        <div className="img">
            <img src={props.src} alt="main image" />
        </div>
    )
}

export default Img;