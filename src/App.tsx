import { useState } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme  } from 'styled-components';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [ theme, setTheme ] = useState<DefaultTheme>(dark);
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SearchBar/>
            <Switch>
              <Route path='/' element={<Home />} />
              <Route path='/results/:expression' element={<SearchResults />} />
              <Route path='/movie/:id' element={<MovieDetails />} />
            </Switch>
          <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
