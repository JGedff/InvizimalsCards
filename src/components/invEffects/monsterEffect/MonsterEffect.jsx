import Icon from "../../icon/Icon";
import Stats from "../../stats/Stats";

export default function MonsterEffect({ iconAttacks, attack, defence }) {
    return (
        <div>
            {
                iconAttacks.map((icon) => {
                    return (
                        <Icon src={icon} />
                    )
                })
            }
            <Stats attack={attack} defense={defence} />
        </div>
    )
}