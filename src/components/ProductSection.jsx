import "../styles/product.css"

const ProductSection = ({ title, description, image, index, total }) => {
  return (
    <section
      className="product-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay" />

      <span className="product-index">
        {String(index + 1).padStart(2, "0")} / {total}
      </span>

      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>

        <button>Explore →</button>
      </div>

      <span className="scroll-hint">Scroll →</span>
    </section>
  )
}

export default ProductSection
