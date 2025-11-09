import React from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {children}
    </div>
  );
}
