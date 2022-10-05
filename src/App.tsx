import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { DrawerProvider } from './components/context/DrawerContext'
import { Header } from './components/Header'
import { Main } from './components/Main'

export function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <Sidebar>
          <Header />
          <Main />
        </Sidebar>
      </DrawerProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}
