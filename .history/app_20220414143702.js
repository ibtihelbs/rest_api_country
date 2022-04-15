//fetch('https://restcountries.com/v2/all')
let _html=(Data, index)=>{
    return  `<a href="country.html?id=${index}"  class="country">
    <img src="${Data.flag}" alt="">
    <div class="info">
        <h1>${Data.name}</h1>
        <h4>${Data.population}</h4>
        <h4>${Data.region}</h4>
        <h4>${Data.capital}</h4>  
    </div>
    </a>`;
}
let country=(){

}

async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.table(data);
    console.log(data);
    data.map((item, index)=>{
        document.getElementById("countries").innerHTML +=_html(item ,index);
      }); 
    
     
  
}
 Data_app();