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
   
        country_info = data.map((item, index)=>{
            document.getElementById("countries").innerHTML +=_html(item ,index);
            return{name: item.name , region:item.region }
        }); 
        
        search_country(data);
    }
    
      
     
  
}
 Data_app();