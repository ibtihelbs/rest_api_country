let list=()=>


async function region() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
   // console.table(data);
   // console.log(data);
 
   
        data.map((item, index)=>{
            //document.querySelector("ul").innerHTML +=list();
            
        }); 
        
       
    
      
     
  
}
 region();