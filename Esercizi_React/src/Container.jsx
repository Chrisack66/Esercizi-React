import { useState } from 'react';
import './Container.css';

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function toggleCollapse() {
    setCollapsed(prev => !prev);
  }

  return (
    <div className="container">
      <h2 className="container-title" onClick={toggleCollapse}>
        {title}
      </h2>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}

export default Container;
