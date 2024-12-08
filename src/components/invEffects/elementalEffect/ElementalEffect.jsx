import Stats from "../../stats/Stats";
import ElementalAttack from "../../elementalAttack/ElementalAttack";

export default function ElementalEffect({ chargeTurns, attack, defense }) {
    return (
        <div>
            <ElementalAttack turns={chargeTurns} />
            <Stats attack={attack} defense={defense} />
        </div>
    )
}