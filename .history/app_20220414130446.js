fetch('https://restcountries.com/v2/all')

async Data_app() {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log()
   /** data.map((item)=>{
        document.querySelector(".card2").innerHTML +=this._html(item);
      }); */
    
     
  }

}
let app= Data_app()