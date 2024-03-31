import { useState } from "react";

export default function SearchBox({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
