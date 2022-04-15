//fetch('https://restcountries.com/v2/all')
let _html=(Data)=>{
    return  `<div class="country">
    <img src="${Data.fla}" alt="">
    <div class="info">
        <h1>name</h1>
        <h4>population</h4>
        <h4>region</h4>
        <h4>capital</h4>
    </div>
</div>`;
}
  


async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    console.table(data);
   /** data.map((item)=>{
        document.getElementById("countries").innerHTML +=_html(item);
      }); */
    
     
  
}
 Data_app();