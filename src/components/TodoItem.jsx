export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`entry ${task.done ? 'entry--done' : ''}`}>
      <button
        className="entry__box"
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? 'Mark as not done' : 'Mark as done'}
      >
        {task.done && (
          <svg viewBox="0 0 16 16" className="entry__check">
            <path d="M3 8.5L6.2 12 13 4" fill="none" strokeWidth="2" />
          </svg>
        )}
      </button>

      <span className="entry__text">{task.text}</span>

      <button
        className="entry__remove"
        onClick={() => onDelete(task.id)}
        aria-label="Remove entry"
      >
        ×
      </button>
    </li>
  )
}
