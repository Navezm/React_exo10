import React, {Component} from 'react';

class App extends Component{
  changeTitle (e){
    e.target.innerHTML = "Changement de titre";
  };

  changeParagraphe (){
    document.querySelector("p").innerHTML = "Je suis un changement de paragraphe de malade";
  }

  render(){
    return(
      <div>
        <h1 onClick={this.changeTitle}>Titre par Défaut</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, accusamus modi. Nesciunt tempore amet esse, in magni consectetur hic repellendus necessitatibus. Porro dicta neque magnam velit architecto inventore est veritatis?</p>
        <button onClick={this.changeParagraphe}>Click on me</button>
      </div>
    );
  };
};

export default App;