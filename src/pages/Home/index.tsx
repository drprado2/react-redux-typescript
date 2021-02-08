import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import {
  useParams,
  useRouteMatch,
  Prompt,
  Link,
  useHistory,
} from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { allRoutes, signOutRequest } from '../../store/modules/auth/slice';
import { setCurrentPage } from '../../store/modules/template/slice';
import { HomeParams } from '../../routes/authenticated.route';
import useQuery from '../../routes/useQuery.hook';

const Home = () => {
  const dispatch = useDispatch();
  const { companyId } = useParams<HomeParams>();
  const { path, url } = useRouteMatch();
  const [isBlocking, setIsBlocking] = useState(false);
  const query = useQuery();
  const history = useHistory();

  const currentRoute = allRoutes.find((r) => r.id === 'home');

  useEffect(() => {
    if (currentRoute) {
      dispatch(setCurrentPage({
        icon: currentRoute.icon,
        routeId: currentRoute.id,
        title: currentRoute.title,
      }));
    }
  }, [currentRoute]);

  function onLogout() {
    dispatch(signOutRequest());
  }

  function onGoToPageWithQueryParam() {
    history.push('/home/444?name=adriano');
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        setIsBlocking(false);
      }}
      >
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
                    }
        />
        <p>
          Blocking?{' '}
          {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size={50}
            placeholder="type something to block transitions"
            onChange={(event) => {
              setIsBlocking(event.target.value.length > 0);
            }}
          />
        </p>
      </form>

      <Link to="/">Ir para</Link>
      <h1>Estamos na empresa sim {companyId}</h1>
      <p>Name Query: {query.get('name')}</p>
      <button type="button" onClick={onGoToPageWithQueryParam}>Navegar para rota com query string</button>
      <br />
      <button type="button" onClick={onLogout}>Sair</button>
      Home Page
    </div>
  );
};

export default Home;
