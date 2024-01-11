import React, { Component }                       from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo                                       from "./components/Topo";
import Home                                       from "./components/Home";
import Frontend                                   from "./components/Frontend";
import Programacao                                from "./components/Programacao";
import Design                                     from "./components/Design";
import Catalogo                                   from "./components/Catalogo";
import NotFound                                   from "./components/NotFound";
import Rodape                                     from "./components/Rodape";
//import Livro                                      from "./components/Livro";
import axios                                      from "axios";
import "./index.css";

class App extends Component {

  state = {
    livros : []
  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/"            element={ <Home        livros={ this.state.livros }/>}/>
          <Route path="/frontend"    element={ <Frontend    livros={ this.state.livros }/>}/>
          <Route path="/programacao" element={ <Programacao livros={ this.state.livros }/>}/>
          <Route path="/design"      element={ <Design      livros={ this.state.livros }/>}/>
          <Route path="/catalogo"    element={ <Catalogo    livros = {this.state.livros}/>}/>
          <Route                     element={ <NotFound/>                                }/>
        </Routes>
        <Rodape />
      </Router>
    );
  }

  // Usando o Axios para obter o array de objetos JSON
  async componentDidMount(){ // O objetivo aqui e preencher o array livros com os dados vindo do json todosOsLivros.json
    try{
      const {data: livros} = await axios.get("/api/todosOsLivros.json"); // retorno padrão data foi renomeado para livros
      this.setState({livros})  
    } catch (error){
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforend",
          "<p class='erro'>Mensagem de erro</p>"
        )
    }
  }

  // Uso da API nativa fetch que faz a mesma coisa que o axios
  async componentDidMountX(){ // O objetivo aqui e preencher o array livros com os dados vindo do json todosOsLivros.json
    fetch("/api/todosOsLivros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error) {
      document
      .querySelectorAll("main")[0]
      .insertAdjacentHTML("beforeend", "<p class='alerta'>Mensagem de erro</p>")
    }) 
  }
}



export default App;
