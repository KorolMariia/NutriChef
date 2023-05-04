import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from './theme';
import RoutesList from './routes/RouterList';
import Nav from './Components/Nav';
import './App.css';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='wrapper'>
          <Nav />
          <Container>
            <RoutesList />
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
