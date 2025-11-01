import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Welcome', icon: '🏠' },
  { to: '/explore', label: 'Explore', icon: '🔎' },
  { to: '/campus-map', label: 'Campus Map', icon: '🗺️' },
  { to: '/thapar-ai', label: 'Thapar AI', icon: '🤖' },
  { to: '/feeds', label: 'Feeds', icon: '📡' },
  { to: '/lost-and-found', label: 'Lost & Found', icon: '🧭' },
  { to: '/contact', label: 'Contact Us', icon: '📞' },
  { to: '/team', label: 'Team', icon: '👥' }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">ti</div>
        <div className="brand-name">TIET Nexus</div>
      </div>
      <div className="user-box">
        <div className="avatar">G</div>
        <div className="user-meta">
          <div className="user-name">Guest</div>
        </div>
      </div>
      <nav className="nav">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            <span className="nav-icon" aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}


