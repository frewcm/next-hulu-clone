import request from '../utils/request'


function NavBar() {
  return (
    <div className="">
      {Object.entries(request).map(([key,{title,url}]) => (
        <h2 index={key}>{title}</h2>

      ))}
     
    </div>
  )
}

export default NavBar