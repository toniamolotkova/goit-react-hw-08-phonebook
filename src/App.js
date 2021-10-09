import { ToastContainer } from 'react-toastify';
import './App.css';
import Container from 'components/Container';
import { Switch, Route } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView/ContactsView';
import { Login } from 'views/Login/Login';
import { RegisterForm } from 'views/RegisterForm/RegisterForm';
import { AppBar } from 'components/AppBar/AppBar';

function App() {

    return (
      <>
        <Container>
          {/* <header>
             <h1 className="title">Phonebook</h1>
          </header> */}
          <AppBar/>
          <Switch>
            <Route exact path="/" component={ContactsView}/>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={Login} />
          </Switch>
         
          {/* <ContactForm />
        
        <Section title="Contacts">
          <Filter /> 
          { contacts && <ContactsList/> }
        </Section>  */}
        </Container>
        
         <ToastContainer />
      </>
    );
  
}


export default App;
