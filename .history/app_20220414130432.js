fetch('https://restcountries.com/v2/all')

async Data_app() {
    const response = await fetch('data.json');
    const data = await response.json();
    
   
    
     
  }

}
let app= Data_app()