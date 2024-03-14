const cards = ({items}) => {
    return (
        <div className='main_content_cards'>
            <p className="title_card">{items.Nombre_Proyecto}</p>
            <p className="description_card">{items.Carrera_Responsable}</p>
        </div>
    )
}

export default cards
