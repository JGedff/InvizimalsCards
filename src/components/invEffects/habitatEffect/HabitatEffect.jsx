import Icon from "../../icon/Icon";

export default function HabitatEffect({ addNum, addIcons, restNum, restIcons }) {
    return (
        <div> (max 4 icons)
            {
                addNum ? 
                <>
                    {addIcons.map((icon) => {
                        return (
                            <Icon src={icon} />
                        )
                    })}
                    +{addNum}
                </> : <></>
            }
            {
                restNum ? 
                <>
                    {restIcons.map((icon) => {
                        return (
                            <Icon src={icon} />
                        )
                    })}
                    -{restNum}
                </> : <></>
            }
        </div>
    )
}