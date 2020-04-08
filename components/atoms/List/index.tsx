import Item from './Item'
import css from './item.scss'

type Children = { Item?: typeof Item }

const List: React.FC<Children> & Children = (children: Children) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ul className={css.todoList} {...children} />
}

List.Item = Item

export default List as typeof List & Required<Children>
