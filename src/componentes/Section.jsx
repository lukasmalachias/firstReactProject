function Section(props){ 
    
    return(
        <section>

            <div>

                <h2>{props.titulo}</h2>

                <p>{props.subTitulo}</p>

                <ul className={props.className}>{props.children}</ul>

            </div>

        </section>
    )
}

export default Section