//React
import { ReactElement, FC as FunctionalComponent } from 'react';
//styles
import './App.css';
//components
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Grid } from './components/Grid/Grid';
//interfaces/types

export const App: FunctionalComponent = (): ReactElement => {
  return (
    <>
      <div className="App">
        {
          <>
            <Header />
            <Search />
            <Grid />
          </>
        }
      </div>
    </>
  );
}
