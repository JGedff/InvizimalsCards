import Icon from '../../icon/Icon'
import Stats from '../../stats/Stats'

export default function DoubleMonsterEffect({ inv1, inv2, attack, defence }) {
    return (
        <div>
            <Icon src={inv1} />
            <Icon src={inv2} />
            <Stats attack={attack} defense={defence}/>
        </div>
    )
}