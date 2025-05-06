import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/books/')({
  component: Books,
})

const books = [
  { id: '1', title: 'Atomic Habits' },
  { id: '2', title: 'Deep Work' },
  { id: '3', title: 'A Random Walk Down Wall Street' },
]

function Books() {
  return (
    <div>
      <h2>Book List</h2>
      <ul className="list-disc ml-5 space-y-1">
        {books.map((book) => (
          <li key={book.id}>
            <Link to="/books/$bookId" params={{ bookId: book.id }}>
              {book.title} - (#{book.id})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}