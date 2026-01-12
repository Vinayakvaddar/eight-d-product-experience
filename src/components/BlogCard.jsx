const BlogCard = ({ image, title, description, category, date }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <span className="blog-meta">
          <span className="blog-category">{category}</span> • {date}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BlogCard
