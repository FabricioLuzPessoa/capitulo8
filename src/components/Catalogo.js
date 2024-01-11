import React, {Fragment} from "react";
import {Link}            from "react-router-dom";

const Catalogo = ({livros}) => {                                                 //  ( 1 ) Props vindo do componente raiz App
    return(
        <main className="principal">
            <h2>Categoria frontEnd</h2>                                          {/* ( 2 ) Marcação do titulo para a cat frontend */}
            <ol>
                {livros
                .filter(livro => livro.categoria === "frontend")                 // ( 3 ) Filtra apenas o objeto da categoria frontend
                .map(livro => (                                                  // ( 4 ) Faz o mapeamento desses objetos
                    <li key={livro.id}>                                          {/*( 5 ) Container para os elementos da lista tem que ter o key*/}
                        <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>        
                    </li>
                ))}
            </ol>
            <h2>Categoria Programação</h2>
            <ol>
                {livros
                .filter(livro => livro.categoria === "programacao")
                .map(livro => (
                    <li key={livro.id}>
                        <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link> {/*( 6 ) O atributo de link aponta para /livro/slug */}       
                    </li>
                ))}
            </ol>
            <h2>Categoria Design</h2>
            <ol>
                {livros
                .filter(livro => livro.categoria === "design")
                .map(livro => (
                    <li key={livro.id}>
                        <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>        
                    </li>
                ))}            
            </ol>
        </main>
    );
};
  

export default Catalogo;
