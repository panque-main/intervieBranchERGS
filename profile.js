const image = document.querySelector('.image');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

class myProfile extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }


    get count(){
        return this.getAttribute("count");
    }

    set count(val){
        this.setAttribute('count', val)
    }


static get observedAttributes(){
    return ["count"];

}

attributeChangedCallback(prop, oldVal, newVal){

    if(prop === 'count') {
        this.render();
        let btn= this.shadow.querySelector("#btn");
    btn.addEventListener('click', this.inc.bind(this))
}
    }


inc(){
    let name= prompt("Ingresa tu nombre: ", "Escribe nombre aqui" );
    this.count=name;
}

connectedCallback(){
    this.render();
    let btn= this.shadow.querySelector("#btn");
    btn.addEventListener('click', this.inc.bind(this))
}

render(){
    this.shadow.innerHTML = `
    
    <h1> Profile Card</h1>
    <div class="modal">
        <img src="img/profile.jpg" alt="" width="300" 
        height="300" />
        <div class="close"></div>
    </div>

    <div class="container">
                        <h2>${this.count}</h2>
                        <h3 class="title">Position</h3>
                        <p class="text">Fullstack developer</p>
                        <button id='btn'> Customize </button>
                    </div>
    
    `;
    }
}

customElements.define("my-profile", myProfile)