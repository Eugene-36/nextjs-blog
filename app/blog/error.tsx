"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}
