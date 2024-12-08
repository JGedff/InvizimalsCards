export default function Stats({ attack, defense }) {
    return (
        <div>
            {
                defense && attack ?
                <>
                    <div>
                        {defense}
                    </div>
                    <div>
                        {attack}
                    </div>
                </> : <></>
            }
            {
                attack ?
                <div>
                    {attack}
                </div> : <></>
            }
            {
                defense ?
                <div>
                    {defense}
                </div> : <></>
            }
        </div>
    )
}