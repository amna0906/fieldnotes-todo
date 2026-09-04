import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import TodoItem from './components/TodoItem.jsx'

const today = new Date().toLocaleDateString(undefined, {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})

const starterTasks = [
  { id: 1, text: 'Water the balcony plants', done: true },
  { id: 2, text: 'Reply to Priya about the trip', done: false },
  { id: 3, text: 'Sketch the new logo concept', done: false },
]

export default function App() {
  const [tasks, setTasks] = useState(starterTasks)
  const [draft, setDraft] = useState('')

  const remaining = tasks.filter((t) => !t.done).length

  function addTask(e) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return

    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }])
    setDraft('')
    toast.success('Added to the log')
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t
        const next = { ...t, done: !t.done }
        if (next.done) toast('Nice — one less thing', { icon: '✓' })
        return next
      }),
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    toast('Entry removed', { icon: '×' })
  }

  return (
    <div className="page">
      <Toaster position="bottom-center" />

      <header className="page__header">
        <p className="page__eyebrow">{today}</p>
        <h1 className="page__title">Today's log</h1>
        <p className="page__meta">
          {remaining === 0
            ? 'Everything is checked off.'
            : `${remaining} entr${remaining === 1 ? 'y' : 'ies'} open`}
        </p>
      </header>

      <form className="composer" onSubmit={addTask}>
        <input
          className="composer__input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Write the next thing to do…"
        />
        <button className="composer__submit" type="submit">
          Add
        </button>
      </form>

      <ul className="entries">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
        {tasks.length === 0 && (
          <li className="entries__empty">The page is blank. Add the first line.</li>
        )}
      </ul>
    </div>
  )
}
