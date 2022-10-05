import { useForm, SubmitHandler } from 'react-hook-form'
import { groupUsers, users } from '../../data/users'
import { Container, FormTask } from './style'

type FormValues = {
  title: string
  groupTask: string
  userTask: string
  time: string
}

export function Home() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      groupTask: '',
      userTask: '',
      time: '',
    },
  })

  const handleSubmitSave: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <Container>
      <h2>Nova tarefa</h2>
      <FormTask onSubmit={handleSubmit(handleSubmitSave)}>
        <input
          type="text"
          id="title"
          placeholder="Titúlo da tarefa"
          {...register('title')}
        />
        <h3>Grupo</h3>

        <select id="groupTask" {...register('groupTask')}>
          {groupUsers.map((group) => (
            <option key={group.id} value={group.title}>
              {group.title}
            </option>
          ))}
        </select>
        <h3>Usuário</h3>
        <select id="userTask" {...register('userTask')}>
          {users.map((users) => (
            <option key={users.id} value={users.title}>
              {users.title}
            </option>
          ))}
        </select>
        <h3>Horário</h3>
        <input type="time" id="time" {...register('time')} />
        <button type="submit">Criar</button>
      </FormTask>
    </Container>
  )
}
