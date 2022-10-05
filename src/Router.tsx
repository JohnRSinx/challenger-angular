import { Route, Routes } from 'react-router-dom'
import { Entity } from './pages/Entity'
import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Entity" element={<Entity />} />
      <Route path="/Tasks" element={<Tasks />} />
    </Routes>
  )
}
