//fetch('https://restcountries.com/v2/all')

async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.log(data);
   /** data.map((item)=>{
        document.getr("countries").innerHTML +=this._html(item);
      }); */
    
     
  

}
 Data_app();