import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';


const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const Registration = lazy(() => import('./views/Registration'));
const Login = lazy(() => import('./views/Login'));


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
    return (
      <>
        <Container>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <HomePage/>
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <Registration/>
              </PublicRoute>
              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <Login/>
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage/>
              </PrivateRoute>
            </Suspense>  
          </Switch>
        </Container>
        
         <ToastContainer />
      </>
    );
  
}


export default App;
