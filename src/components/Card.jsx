import comics from "../comics.js"
function ComicsList() {
  return (
    <div className="comics-container">
      {comics.map(comic => // Parametro funzione - return implicito
      ( // Valore che la funzione restituisce (le parentesi fanno riferimento al return implicito)
        <div className="comic-card" key={comic.id}>
          <img src={comic.thumb} alt={comic.series} />
          <p>{comic.series}</p>
        </div>
      ))}
    </div>
  );
}

export default ComicsList;

// IN ALTERNATIVA - FUNZIONE GENERICA DA POTER RICHIAMARE
/* const ComicList = () => {
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
export default ComicList;*/

