"use client";

export default function NotFound() {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>

      <div>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
}
