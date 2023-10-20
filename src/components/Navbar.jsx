const Navbar = ({menuList}) => {
  console.log(menuList)
  return (
    <div className="bg-cyan-300 text-white h-12 flex justify-center items-center">
      <ul className="flex gap-1 text-3xl">
        {
          menuList.map(ele => {
            return  <li key={ele.key}>{ele.category}</li>
          })
        }
        
        
      </ul>
    </div>
  )
}

export default Navbar