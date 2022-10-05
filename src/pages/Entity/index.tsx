import { useContext } from 'react'
import { TaskUserContext } from '../../components/Main'

export function Entity() {
  const { users } = useContext(TaskUserContext)
  return (
    <div>
      <h2>Pesquisar</h2>
      <input type="search" />
      {users.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  )
}
