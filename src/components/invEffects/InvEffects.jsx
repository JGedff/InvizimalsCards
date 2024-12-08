import HabitatEffect from "./habitatEffect/HabitatEffect";
import MonsterEffect from "./monsterEffect/MonsterEffect";
import SupportEffect from "./supportEffect/SupportEffect";
import ElementalEffect from "./elementalEffect/ElementalEffect";
import DoubleMonsterEffect from "./doubleMonsterEffect/DoubleMonsterEffect";

export default function InvEffects({ cardType, invId }) {
    return (
        <>
            {
                <HabitatEffect addNum={attack} addIcons={[]} restNum={defence} restIcons={[]} />
            }
            {
                <MonsterEffect iconAttacks={""} attack={attack} defence={defence} /> && (monster / vector)
            }
            {
                <ElementalEffect chargeTurns={0} attack={attack} defense={defence} />
            }
            {
                <DoubleMonsterEffect inv1={""} inv2={""} attack={attack} defence={defence} />
            }
            {
                <SupportEffect text={adintionalInfo} />
            }
            {
                <></>
            }
        </>
    )
}