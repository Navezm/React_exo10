import React, {Component} from 'react';

class App extends Component{
  changeTitle (e){
    e.target.innerHTML = "Changement de titre";
  };

  changeParagraphe (){
    document.querySelector("p").innerHTML = "Je suis un changement de paragraphe de malade";
  }

  changeInput (){
    let input = document.getElementById("input");
    let h1 = document.getElementById("titre");
    h1.innerHTML = input.value;
  }

  changeParagaph (){
    let textarea = document.getElementById("textarea");
    let paragraphe = document.getElementById("paragraphe");
    paragraphe.innerHTML = textarea.value;
  }

  render(){
    return(
      <div>
        <h1 onClick={this.changeTitle}>Titre par Défaut</h1>
        <h1 id="titre">Second titre</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, accusamus modi. Nesciunt tempore amet esse, in magni consectetur hic repellendus necessitatibus. Porro dicta neque magnam velit architecto inventore est veritatis?</p>
        <p id="paragraphe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe quo explicabo nam, sequi unde eaque earum molestias tenetur laborum facilis inventore magni! Maxime accusantium accusamus, explicabo vitae, in eveniet aut impedit nulla ex blanditiis cum neque sit fugiat quia ea distinctio odit facilis incidunt dolor doloribus modi sint voluptates?</p>
        <button onClick={this.changeParagraphe}>Click on me</button> <br/> <br/>
        <input type="text" name="" id="input"/> <button onClick={this.changeInput}>Second button</button>
        <textarea onInput={this.changeParagaph} name="" id="textarea" cols="30" rows="10"></textarea>
      </div>
    );
  };
};

export default App;