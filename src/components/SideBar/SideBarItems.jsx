import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WebIcon from '@mui/icons-material/Web';
import SettingsIcon from '@mui/icons-material/Settings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';



export const SideBarItems =[
    
{
   title:"Dashboard",
   path:"/",
   icon:<SpaceDashboardIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>
   
},
{
    title:"Employees",
    path:"/employees",
    icon:<PeopleIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>


    
},
{
    title:"Projects",
    path:"/projects",
    subMenu:true,
    subMenuItems:[
      {title:"submenu 1"},
      {title:"submenu 2"},
      {title:"submenu 3"}
    ],
    icon:<WebIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>
   
},
{
    title:"Clients",
    path:"/clients",
    icon:<HandshakeIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>
 
},
{
    title:"Events",
    path:"/events",
    icon:<EventNoteIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>
    
},
{
    title:"Statistics",
    path:"/statistics",
    icon:<AutoGraphIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>
 
},

{
    title:"Settings",
    spacing:true,
    path:"/settings",
    icon:<SettingsIcon style={{color:"rgb(211, 211, 211)", fontSize:"1.3rem"}}/>
   
},

    
]