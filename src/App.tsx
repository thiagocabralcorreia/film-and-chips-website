import usePersistedState from './components/utils/usePersistedState';
import { BrowserRouter as Router, Routes as Switch, Route  } from 'react-router-dom';
import { ThemeProvider  } from 'styled-components';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFount';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark);
  
  const toggleTheme = () => {
		setTheme(theme.title === 'dark' ? light : dark);
	}
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <SearchBar />
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/results/:expression' element={<SearchResults />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
