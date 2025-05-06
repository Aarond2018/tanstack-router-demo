export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong, from the Error Boundary!</h2>
      <p>{error.message}</p>
    </div>
  );
}
