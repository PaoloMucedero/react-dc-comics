function Card({ title, img }) {
    return (
        <div className="comic-card">
          <img
            src={img}
            alt="alt-text"
        />
          <p>{title}</p>
        </div>
    )
}

export default Card