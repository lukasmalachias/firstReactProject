function List(props){
    return(
        <li>
            <a target="_blank" href={props.url}>
            <img src={props.imagemUrl} alt={props.alt} />
            </a>
        </li>
    )
}

export default List