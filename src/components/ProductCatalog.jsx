import React, {useState} from "react";
import products from "../data/products.json";

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("");

  const filtered = products.filter(p =>
    p.category.toLowerCase().includes(query.toLowerCase()) &&
    (!price || p.price <= Number(price))
  );

  return (
    <div>
      <input
        placeholder="Category…"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input
        placeholder="Max price"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <ul>
        {filtered.map(p => (
          <li key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.category} – ${p.price}</p>
            <p>{p.description}</p>
            <p>Rating: {p.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
