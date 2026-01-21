import comics from "../comics.js"
function ComicsList() {
  return (
    <div className="comics-container">
      {comics.map(comic => (
        <div className="comic-card" key={comic.id}>
          <img src={comic.thumb} alt={comic.series} />
          <p>{comic.series}</p>
        </div>
      ))}
    </div>
  );
}

export default ComicsList;