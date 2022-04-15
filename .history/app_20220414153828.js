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
   <img src="${data.flag}" alt="">
   <div class="2x-column">
       <h1>${data.name}</h1>
       <h5>${data.nativeName}</h5>
       <h5>${data.population}</h5>
       <h5>${data.region}</h5>
       <h5>${data.subregion}</h5>
       <h5>${data.capital}</h5>
   </div>
  
   <div class="2x-column">
       <h5> ${data.topLevelDomain}</h5>
       ${(data.currencies.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}
       ${
           (data.languages.)
       }
       <h5> ${(data.languages.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}</h5>
       
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
   // console.table(data);
   // console.log(data);
    if(country_id){
        console.log(data[country_id]);
        main.innerHTML =country(data[country_id]);
        /**data.map((i)=>{
            
            
          });  */
    }else{
        data.map((item, index)=>{
            document.getElementById("countries").innerHTML +=_html(item ,index);
        }); 
    }
    
      
     
  
}
 Data_app();