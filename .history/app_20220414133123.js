//fetch('https://restcountries.com/v2/all')
let _html=(Data)=>{
    return  `<div class="country">
    <img src="${Data.flag}" alt="">
    <div class="info">
        <h1>${Data.name}</h1>
        <h4>${Data.population}</h4>
        <h4>${Data.population}</h4>
        <h4>${Data.population}</h4>
    </div>
</div>`;
}
  


async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.table(data);
    console.log(data);
   /** data.map((item)=>{
        document.getElementById("countries").innerHTML +=_html(item);
      }); */
    
     
  
}
 Data_app();