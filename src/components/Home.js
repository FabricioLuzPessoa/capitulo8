import React from "react";
import { Link } from "react-router-dom";


const Home = ({ livros }) => (                                                     // ( 1 ) Props.
    <main className="principal">
        <h2>Últimos lançamentos</h2>
        {livros
        .filter((n, index) => index < 6)                                           // ( 2 ) retorna um array com 6 objetos livro.
        .map(livro => (                                                            // ( 3 ) executa o codigo para os 6 livros.
            <div className="card" key={livro.id}>                                  {/*( 4 ) Em React cada elemento tem que ter uma identificação única */}
                <div className="thumb">
                    <img
                    src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"} // ( 5 )  O método replace é usado para tirar os tracinhos da string.
                    alt="Thumbnail da capa do livro ..." />                         {/*( 6 ) É bom ter mas meio que desnecessário. */}
                </div>
                {livros
                .filter(c => c.slug === livro.slug)                                 // ( 7 ) Faço um filter entre o livro map e livro do json completo
                .map(livro => (                                                     // ( 8 ) Mapeamento do filtro pelo slug
                    <Link to={`/livro/${livro.slug}`} key={livro.id} >              {/*( 9 ) Direciona para outro componente*/}
                        {
                            <div className="detalhes">                              {/*( 10 ) Container dos detalhes dos livros*/}
                                <h3>{livro.titulo}</h3>
                                <p>{livro.descricao.slice(0, 130) + "..."}</p>      {/*( 11 ) Captura apenas os 130 primeiros caracteres */}
                                <p>Leia mais &gt;</p>
                            </div>
                        }
                    </Link>
                ))}
            </div>
        ))}
    </main>
);

export default Home;

