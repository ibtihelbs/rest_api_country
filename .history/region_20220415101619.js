asyn


async function Data_app() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
   // console.table(data);
   // console.log(data);
 
   
        country_info = data.map((item, index)=>{
            document.getElementById("countries").innerHTML +=_html(item ,index);
            
        }); 
        
       
    
      
     
  
}
 Data_app();