const Item = ({nombre, img, alt}) => {
    return (
        <li>
            <img src={img.src} alt={alt}/>
            {nombre}
        </li>
    )
}

export default Item