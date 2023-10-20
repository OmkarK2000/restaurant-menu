const Card = (props) => {
    
    const image = props.image;
    const name = props.name;
    const price = props.price;
    const category = props.category;

    return (
        <div className="w-60 h-auto flex flex-col items-center  justify-center p-3 m-3 border rounded-lg border-gray-400">
            <ul>
                <span className="image-con ">
                    <img className=" w-48 h-48 object-cover" src={image} alt="" />
                </span>
                <span className="food-info">
                    <p>Category : {category}</p>
                    <p>Name : {name}</p>
                    <p>Price : {price}</p>
                    <p>Description: {}</p>
                </span>
            </ul>
        </div>
    )
}

export default Card