import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalContextProvider from './context/GlobalContext';
import {Main} from './pages/Main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)


root.render(
  <>
    <GlobalStyles/>
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  </>
)