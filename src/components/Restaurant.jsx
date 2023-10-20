import { useState } from "react"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"
import menu from "./menu.json"

const uniqueList = [ 
    ...new Set(
        menu.map((ele) => {
            return ele.category
        })
    ),
    "All"
]
const Restaurant = () => {

    const [menuList, setMenuList] = useState(uniqueList)

    return (
        <>
            <div className=" w-screen">
                <Navbar menuList={menuList}/>
                <MenuCard />
            </div>
        </>
    )
}

export default Restaurant