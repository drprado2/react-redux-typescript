import React, {useEffect, useState} from "react";
import './styles.less';
import {useDispatch} from 'react-redux';
import {signOutRequest} from "../../store/modules/auth/slice";
import {
    useParams,
    useRouteMatch,
    Prompt,
    Link,
    useHistory
} from "react-router-dom";
import {HomeParams} from "../../routes/authenticated.route";
import useQuery from "../../routes/useQuery.hook";

const Home = () => {
    const dispatch = useDispatch();
    const {companyId} = useParams<HomeParams>();
    const { path, url } = useRouteMatch();
    const [isBlocking, setIsBlocking] = useState(false);
    const query = useQuery();
    let history = useHistory();

    function onLogout(){
        dispatch(signOutRequest())
    }

    useEffect(() => {
        console.log(path, url);
    }, [path, url])

    function onGoToPageWithQueryParam(){
        history.push('/home/444?name=adriano')
    }

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                setIsBlocking(false);
            }}>
                <Prompt
                    when={isBlocking}
                    message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                    }
                />
                <p>
                    Blocking?{" "}
                    {isBlocking ? "Yes, click a link or the back button" : "Nope"}
                </p>

                <p>
                    <input
                        size={50}
                        placeholder="type something to block transitions"
                        onChange={event => {
                            setIsBlocking(event.target.value.length > 0);
                        }}
                    />
                </p>
            </form>

            <Link to="/">Ir para</Link>
            <h1>Estamos na empresa {companyId}</h1>
            <p>Name Query: {query.get('name')}</p>
            <button onClick={onGoToPageWithQueryParam}>Navegar para rota com query string</button>
            <br/>
            <button onClick={onLogout}>Sair</button>
            Home Page
        </div>
    )
}

export default Home;
