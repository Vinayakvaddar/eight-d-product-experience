const Navbar = () => {
  const navigateTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      window.location.hash = id
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">8-D</div>

      <div className="nav-links">
        <button onClick={() => navigateTo("products")}>
          Products
        </button>
        <button onClick={() => navigateTo("usecase")}>
          Use Cases
        </button>
        <button onClick={() => navigateTo("benefits")}>
  Benefits
</button>
 <button onClick={() => navigateTo("blogs")}>
  Blogs
</button>
<button onClick={() => navigateTo("contact")}>
  Contact Us
</button>

      </div>
    </nav>
  )
}

export default Navbar
