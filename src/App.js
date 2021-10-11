import { ToastContainer } from 'react-toastify';

import Container from 'components/Container';
import HomePage from 'views/HomePage';
import ContactsPage from 'views/ContactsPage';
import { Switch, Route } from 'react-router-dom';
import RegisterPage from 'views/RegisterPage';
import LoginPage from 'views/LoginPage';
import AppBar from 'components/AppBar';

function App() {
    return (
      <>
        <Container>
        <AppBar/>
              <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
        </Container>
        
         <ToastContainer />
      </>
    );
  
}


export default App;
