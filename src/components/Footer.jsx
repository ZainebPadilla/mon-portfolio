import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Zaineb DHAHBI. All rights reserved.
      </div>
    </footer>
  );
}
