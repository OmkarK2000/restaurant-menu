import { useState } from "react"
import Card from "./Card"
import menu from "./menu.json"

const MenuCard = () => {
  const [menuData, setDataList] = useState(menu)

  return (
    <div className="flex justify-center flex-wrap">
      {
        menuData.map((ele) => {
          return <Card key={ele.id} id={ele.id} name={ele.name} image={ele.image} category={ele.category} price={ele.price} description={ele.description} />
        })

      }

    </div>
  )
}

export default MenuCard

