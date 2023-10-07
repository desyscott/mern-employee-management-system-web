import {Fragment,useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {SideBarItems} from "../SideBar/SideBarItems"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SideBar() {
    const [open,setOpen]=useState(true)
    const [subMenuOpen,setSubMenuOpen]=useState(false)
    const [selected,setSelected]=useState(0);

    const handleSelected=(index)=>{
      setSelected(index)
      console.log(index)
    }
    useEffect(()=>{

    },[selected])

  
  return (
    <Fragment>
      <div className={`h-screen bg-indigo-950 flex  sticky inset-y-0  top-0 left-0  pt-10  flex-col border-r shadow-sm   ${open ? "w-52":"w-20"} duration-300`}> 
          <div className='border-b border-slate-600 mx-1 pb-8'></div>
           <KeyboardArrowLeftIcon style={{ color: 'black' ,fontSize: '30px' }} className={`absolute  -right-4 top-5 cursor-pointer shadow-sm  rounded-full bg-white border-r  '
           ${!open && "rotate-180 "} duration-300 `} onClick={()=>setOpen(!open)}/>
          
            <ul className='mt-2 w-full pl-1 pr-2'>
            {SideBarItems.map((item,index)=>(
              <>
              <li key={index} className={`flex item-center gap-x-4 cursor-pointer mt-5  text-sm font-medium 
              ${selected===index ? "text-blue-500 bg-gradient-to-r from-gray-500 border-l-4 border-indigo-500 ":"order-transparent  hover:bg-gradient-to-r from-gray-700  text-gray-400 hover:text-gray-200 hover:border-l-4  hover:border-indigo-500"}
              duration-100 ${item && item.spacing && "mt-32"}`}
              onClick={() => handleSelected(index)}
              >
                  <Link to={item.path} className="flex item-center gap-x-4  p-2  pl-3 pr-4 py-2 ">
                    <span className='block float-left text-gray-100 hover:text-gray-300'>{item.icon}</span>
                    <span className={`flex-1 duration-200  ${!open && "hidden"}`}>{item.title}</span>
                      {item.subMenu && open && 
                      <span onClick={()=>setSubMenuOpen(!subMenuOpen)} className='text-gray-400'>
                        <KeyboardArrowDownIcon  style={{color:"rgb(211, 211, 211)"}} className={`${subMenuOpen && "rotate-180"} text-gray-600 duration-300 ml-4`}/>
                      </span>
                    }
                    </Link>
              </li>
            { item.subMenu && subMenuOpen && open &&
              ( <ul>
              
              {item.subMenuItems.map((subMenuItem,index)=>(
                <>
                  <li key={index} className="text-gray-400 pl-10 mt-2 text-sm">
                      {subMenuItem.title}
                  </li>
                </>
              ))}
              </ul>)
              }
              </>
            ))}
              
            </ul>
      </div>

    </Fragment>
  )
}

export default SideBar
