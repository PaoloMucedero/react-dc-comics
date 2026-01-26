// TEST PER INCORPORARE FOOTER
import footerLinksData from "../links.js"


// FUNZIONE FOOTER
const Footer = () => { // QUI MI STO RICAVANDO OGNI LISTA DI LINKS COMLETA DI SEZIONE
    
    function listaLinks(arrayLink) {
        return arrayLink.map((singleLink) => {
            return (<li key={singleLink.id}>
                <a href={singleLink.url}>{singleLink.section}</a>
            </li>)
        })
    }
    
    return (
        <nav>
            {footerLinksData.map((footerLinksData, i) => ( 
                <div>
                    <h3>{footerLinksData.title}</h3>
                    <ul>
                        {listaLinks(footerLinksData.links)}
                    </ul>
                </div>
            ))}   
        </nav>
    )
}

export default Footer;








