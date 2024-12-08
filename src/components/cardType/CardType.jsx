export default function CardType({ type, iconSrc }) {
    return (
        <div>
            {
                iconSrc ?
                <img src="" alt="" />:
                <></>
            }
            (icono legendario/dark/ningun icono)
            {type}(casa...)
        </div>
    )
}