import { createFileRoute } from "@tanstack/react-router";
import ErrorBoundary from "../../components/ErrorBoundary";

const books = [
  { id: "1", title: "Atomic Habits" },
  { id: "2", title: "Deep Work" },
  { id: "3", title: "A Random Walk Down Wall Street" },
];

export const Route = createFileRoute("/books/$bookId")({
  errorComponent: ErrorBoundary,
  loader: ({ params }) => {
    const book = books.find((b) => b.id === params.bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  },
  component: BookDetail,
});

function BookDetail() {
  const book = Route.useLoaderData();

  return (
    <div>
      <h2 className="">Book Detail</h2>
      <p>
        You're viewing the book with ID: <strong>{book.id}</strong>
      </p>
    </div>
  );
}

