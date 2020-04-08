import React, { useCallback, useState, ChangeEvent, KeyboardEvent } from 'react'
import css from './addTodo.scss'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

// TODO: DRY
type Todo = {
  title: string
}

type Props = {
  onAdd: (todo: Todo) => void
}

const AddTodo: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('')

  const handleAdd = useCallback(() => {
    if (title) {
      onAdd({ title })
    }
    setTitle('')
  }, [onAdd, title])
  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !(e.nativeEvent as any).isComposing) {
        handleAdd()
      }
    },
    [handleAdd]
  )
  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  return (
    <div className={css.wrapper}>
      <Input value={title} onChange={handleChangeInput} onKeyDown={handleEnter} />
      <Button onClick={handleAdd} disabled={!title.length}>
        +
      </Button>
    </div>
  )
}

export default AddTodo
