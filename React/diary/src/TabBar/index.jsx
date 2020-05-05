import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function TabBar() {
  const [selectedTab, setSelectedTab] = useState(1)
  return (
    <div className="tabbar">
      <div className={`tabbarItem ${selectedTab===1? "select": ""}`}  onClick={() => setSelectedTab(1)}>
        <Link to="/">
          首页
        </Link>
      </div>
      <div className={`tabbarItem ${selectedTab===2? "select": ""}`} onClick={() => setSelectedTab(2)}>
        <Link to="/edit">
          编辑
        </Link>
      </div>
    </div>
  )
}

export default TabBar