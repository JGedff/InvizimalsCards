export default function InvCategory({ category }) {
    function getCategory(num) {
        mapCategories = []

        for (let _ = 0; _ < num; _++) {
            mapCategories.push(<img src="" alt="" />)            
        }

        return mapCategories
    }

    return (
        <div>
            {getCategory(category)}
        </div>
    )
}