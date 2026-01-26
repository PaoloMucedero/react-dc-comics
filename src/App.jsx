import MainHeader from "./components/MainHeader"
import comics from "./comics.js"
import ComicsList from "./components/Card.jsx"
import footerLinksData from "./links.js"
import Footer from "./components/Footer.jsx"
console.log(footerLinksData);
console.log(comics);

function App() {
  return (
    <>
      <ComicsList />
      <Footer />
    </>
  )
}

export default App


