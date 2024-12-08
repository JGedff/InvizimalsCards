import SpecialCard from "../specialCard/SpecialCard";

export default function InvImage({ imgSrc, specialCard }) {
    return (
        <div>
            <SpecialCard text={specialCard} />
            <img src={imgSrc} alt="" />
        </div>
    )
}