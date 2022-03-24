import '../styles/Message.css';

export const Message = ({name, number, dosmth}) => {
  return <h1 className="message" onClick={dosmth}>Выполнение урока {name}{number}</h1>
}