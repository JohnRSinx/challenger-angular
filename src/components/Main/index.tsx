import { createContext, useState } from 'react'
import { Router } from '../../Router'

interface TaskUserContextType {
  users: Array
}
export const TaskUserContext = createContext({} as TaskUserContextType)

export function Main() {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: 'FrontEnd',
    },

    {
      id: 2,
      title: 'BackEnd',
    },
    {
      id: 3,
      title: 'ChapterLead',
    },
    {
      id: 4,
      title: 'QA',
    },
  ])

  return (
    <TaskUserContext.Provider value={{ users, setUsers }}>
      <Router />
    </TaskUserContext.Provider>
  )
}
