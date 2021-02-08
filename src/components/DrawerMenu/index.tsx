import React from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { authorizedRoutes } from '../../store/modules/auth/slice';
import { StoreState } from '../../store';
import { toggleDrawer } from '../../store/modules/template/slice';

const DrawerMenu = () => {
  const { roles } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state: StoreState) => state.template);

  return (
    <div className={`drawer-menu ${drawerOpen ? 'open' : 'close'}`}>
      <div className="header">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" onClick={() => dispatch(toggleDrawer())}><GiHamburgerMenu /></button>
        Header here
      </div>
      <hr />
      <div>Avatar here</div>
      <hr />
      <ul>
        {authorizedRoutes(roles()).map((r) => (
          <li key={r.id}><Link to={r.path}>{r.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerMenu;
