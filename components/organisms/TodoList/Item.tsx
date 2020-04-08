import React, { useCallback } from 'react'
import ListItem from '../../molecules/ListItem'
import Button from '../../atoms/Button'

type Todo = {
  id: string
  title: string
}

type Props = Todo & {
  onDelete: (id: string) => void
}

const TodoItem: React.FC<Props> = ({ onDelete, id, title }) => {
  const handleDelete = useCallback(() => {
    onDelete(id)
  }, [onDelete, id])

  return (
    <ListItem
      title={title}
      action={
        <Button type="danger" onClick={handleDelete}>
          del
        </Button>
      }
    />
  )
}

export default TodoItem
