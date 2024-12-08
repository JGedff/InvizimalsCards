import InvName from "../invName/InvName";
import CardType from "../cardType/CardType";
import InvImage from "../invImage/InvImage";
import InvEffects from "../invEffects/InvEffects";
import InvCategory from "../invCategory/InvCategory";

export default function InvCard({ id }) {
    return (
        <section>
            <div>
                <InvName name={""} />
                <div>
                    <InvCategory category={0} />
                    <CardType type={""} iconSrc={""} />
                </div>
            </div>
            
            <InvImage imgSrc={""} specialCard={""} />
            
            <div>
                {info}
            </div>
            
            <InvEffects cardType={""} invId={id} />
        </section>
    )
}