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
     let list=document.querySelector(".regions");
     console.log(list)
     list.addEventListener("click", (e)=>{
         let regionItem= e.target.closest('li');
         if(!regionItem)return;
         let value=regionItem.dataset.attribute;
         let countries= document.querySelectorAll(".country");
         data.forEach((col,index)=>{
             
            let visible=col.region.includes(value);
            console.log(value,visible,col.region)
            countries[index].classList.toggle("hidden",!visible);
           }) 

     })       
}

let country=(data)=>{
   return`<img src="${data.flag}" alt="">
   <div class="country-wrap">
   <div class="x2-column"><h1>${data.name}</h1></div>
   <div class="x2-column">
       <h5> Native Name : ${data.nativeName}</h5>
       <h5> Population : ${data.population}</h5>
       <h5>Region : ${data.region}</h5>
       <h5> Sub Region : ${data.subregion}</h5>
       <h5> Capital : ${data.capital ? data.capital:`no capital`}</h5>
   </div>
  
   <div class="x2-column">
       <h5> ${data.topLevelDomain ? data.topLevelDomain: `<button>no info</button>`}</h5>
       
       <h5>${data.currencies ? data.currencies[0].name:`<button>no currencies</button>`}</h5>
       ${data.languages ?
           data.languages.map(function(item){ return "<button>"+item.name+"</button>"}).join(" ")
           : `<button>no language</button>`
           }
   </div>
   
   <div class="x2-column">
       <h5>border countries : </h5>
       <div class="bordercoutries">
       ${
          data.borders ?
           
            data.borders.map(function(item){ return "<button>"+item+"</button>"}).join(" "): 
             `<button disabled="disabled">this is an island</button>`}
       
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
    }else{
        country_info = data.map((item, index)=>{
            document.getElementById("countries").innerHTML +=_html(item ,index);
            return{name: item.name , region:item.region }
        }); 
        search_country(data);
        search_by_region(data);
    }
    
      
     
  
}
 Data_app();
 /***/
