import React, { useState } from 'react';
import { Navbar, Footer } from '../components';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/v1/products/nlp-search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.products || []);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3">
        <form onSubmit={handleSubmit} className="mb-3">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />
        </form>
        <div className="row">
          {results.map((p) => (
            <div key={p._id} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card h-100">
                {p.images && p.images[0] && (
                  <img
                    src={p.images[0].url}
                    className="card-img-top p-3"
                    alt={p.name}
                    style={{ height: 300, objectFit: 'contain' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text">Price: ${p.price}</p>
                  <p className="card-text">Rating: {p.ratings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;