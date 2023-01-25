import React from 'react'
import './Sidebar.css'
import  LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import  ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import ChatIcon from '@mui/icons-material/Chat'
import StorefrontIcon from '@mui/icons-material/Storefront'
import  EmojiFlagsIcon  from '@mui/icons-material/EmojiFlags'
function Sidebar() {
  return (
    <div className='sidebar'>
         <SidebarRow src='https://media.istockphoto.com/id/1133604495/photo/hacker-dark-face-using-laptop.jpg?s=612x612&w=0&k=20&c=sDzILzet4nFoqXeGc6TwzYrQRZ1WVbioPImZP4OEYL0=' title='Amanual shibabaw' />
         <SidebarRow Icon={LocalHospitalIcon} title='COVID-19Information Center' />
         <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />

         <SidebarRow Icon={PeopleIcon} title='Friends' />
         <SidebarRow Icon={ChatIcon} title='Messangers' />
         <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
         <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title='More'/>



      
    </div>
  )
}

export default Sidebar
