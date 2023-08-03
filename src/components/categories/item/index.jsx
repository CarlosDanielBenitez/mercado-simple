import "./style.css"

const CategoryItem = ({ onSelectCategory, type, name, id }) => {
    return (
        <button
            onClick={onSelectCategory} type={type} className="categoryContainer" >
            <p className="categoryName">{name}</p>
        </button>
    )
}

export default CategoryItem;