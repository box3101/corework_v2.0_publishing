import React, { useState } from 'react';
import menuData from 'constants/data'; // 메뉴 가져오기

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId === activeMenu ? null : menuId);
  };

  return (
    <aside className='admin-sidebar'>
      <div className='admin-sidebar-left-menu'>
        <div className='admin-sidebar-top'>
          <div className='square-button'>1</div>
          <nav className='nav-buttons'>
            {/* 대메뉴 */}
            {menuData.map((item) => (
              <button
                className={`nav-button ${activeMenu === item.id ? 'active' : ''}`}
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
              >
                {item.title}
              </button>
            ))}
            {/* 대메뉴 EEE */}
          </nav>
        </div>
        <div className='admin-sidebar-bottom'>
          <div className='profile-icon'>{/* <img src='profile-image.jpg' alt='Profile' /> */}</div>
        </div>
      </div>
      <div className='admin-sidebar-content'>
        <nav className='main-nav'>
          {activeMenu && (
            <ul>
              <li className='first'>설정</li>
              {/* 메뉴 2Depth , 3Depth   */}
              {menuData
                .find((menu) => menu.id === activeMenu)
                ?.submenu.map((item, idx) => (
                  <li key={idx}>
                    <a href='#none' className='first'>
                      <span>{item.title}</span>
                    </a>
                    {item.subSubmenu && (
                      <ul className='submenu'>
                        {item.subSubmenu.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a href='#none'>
                              <span>{subItem.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              {/* 메뉴 2Depth , 3Depth EEE  */}
            </ul>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
