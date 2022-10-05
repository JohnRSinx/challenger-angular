import { List } from 'phosphor-react'
import { useDrawerContext } from '../context/DrawerContext'
import { ButtonMenu, Container } from './style'

export function Header() {
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Container>
      <ButtonMenu onClick={toggleDrawerOpen}>
        <List size={30} />
      </ButtonMenu>
      <h1>Gerenciador de Tarefas</h1>
    </Container>
  )
}
