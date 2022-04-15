//fetch('https://restcountries.com/v2/all')
let _html=(Data)=>{
    
}
  


async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.log(data);
   /** data.map((item)=>{
        document.getElementById("countries").innerHTML +=_html(item);
      }); */
    
     
  
}
 Data_app();