import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { House, Table, UserList } from 'phosphor-react'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useDrawerContext } from '../context/DrawerContext'

interface Sidebar {
  children: ReactNode
}

// eslint-disable-next-line no-redeclare, no-unused-vars
export const Sidebar = ({ children }: Sidebar) => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant="temporary"
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://github.com/JohnRSinx.png"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <NavLink to="/" title="Home" onClick={toggleDrawerOpen}>
                  <ListItemIcon>
                    <House />
                    <p>Home</p>
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>{' '}
              <ListItemButton>
                <NavLink to="/Entity" title="Entity" onClick={toggleDrawerOpen}>
                  <ListItemIcon>
                    <UserList />
                    <p>Users</p>
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>{' '}
              <ListItemButton>
                <NavLink to="/Tasks" title="Tasks" onClick={toggleDrawerOpen}>
                  <ListItemIcon>
                    <Table />
                    <p>Tarefas</p>
                  </ListItemIcon>
                </NavLink>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
