//fetch('https://restcountries.com/v2/all')
let main= document.querySelector('main');
let urlParams = new URLSearchParams(window.location.search);
let country_id = urlParams.get('id'); 
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
let country=(data)=>{
   return`<div class="country-wrap">
   <img src="" alt="">
   <div class="2x-column"><h1>name</h1>
       <h5>native name</h5>
       <h5>${data}</h5>
       <h5>population</h5>
       <h5>region</h5>
       <h5>sub region</h5>
       <h5>capital</h5>
   </div>
   <div class="2x-column">
       <h5>top level domain</h5>
       <h5>currencies</h5>
       <h5>languages</h5>
   </div>
   
   <div class="2x-column">
       <h5>border countries</h5>
       <div class="bordercoutries">
           <button disabled="disabled"></button>
       </div>
   </div>
  </div>`;
}

async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.table(data);
    console.log(data);
    if(country_id){
        console.log('hi')
    }else
    data.map((item, index)=>{
        document.getElementById("countries").innerHTML +=_html(item ,index);
      }); 
      
      data.map((i)=>{
        main.innerHTML =country(i[country_id]);
      }); 
  
}
 Data_app();