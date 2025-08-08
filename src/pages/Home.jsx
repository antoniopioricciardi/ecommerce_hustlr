import { Navbar, Main, Product, ProductCatalog, Footer } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <ProductCatalog />
      <h2>Product Catalog</h2>
      <p>Explore our wide range of products.</p>
      <ProductCatalog />
      <Footer />
    </>
  )
}

export default Home;