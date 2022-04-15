//fetch('https://restcountries.com/v2/all')
let main= document.querySelector('main');
let urlParams = new URLSearchParams(window.location.search);
let country_id = urlParams.get('id'); 
let country_info = [];
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
let search=document.querySelector("input");
let search_country=(data)=>{
    search.addEventListener("input",(e)=>{
       // console.log(country_info);
        let value=e.target.value.toLowerCase();
        let countries= document.querySelectorAll(".country");
         //const visible = user.tech.includes(value);
         country_info.forEach((col,index)=>{
             //console.log(col);
             //return;
            let visible=col.name.toLowerCase().includes(value)|| col.region.toLowerCase().includes(value);
            
            countries[index].classList.toggle("hidden",!visible);
           })
        })
        
}
let search_by_region=(data)=>{
     let list=document.querySelector("ul");
     list.addEventListener("click", (e)=>{
         let region= e.target.closet('li');
         console.log(region);
     })       
}
/**data.forEach((col,index)=>{
       let visible=col.find(str=>str.toLowerCase().includes(value));
 
       countries[index].classList.toggle("hidden",!visible);
      }) */
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
       
       <h5>${data.currencies[0].name}</h5>
       ${(data.languages.map(function(item){ return "<button>"+item.name+"</button>"}).join(" "))}
   </div>
   
   <div class="2x-column">
       <h5>border countries</h5>
       <div class="bordercoutries">
       ${(data.borders.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}
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
        country_info = data.map((item, index)=>{
            document.getElementById("countries").innerHTML +=_html(item ,index);
            return{name: item.name , region:item.region }
        }); 
        
        search_country(data);
        search_by_region=(data)
    }
    
      
     
  
}
 Data_app();
 /***/
