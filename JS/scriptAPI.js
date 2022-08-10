const api = "https://breakingbadapi.com/api/characters";
 

async function get(){
    const response = await fetch(api);
    const data = await response.json();
    const __data= data.map(za =>za);
    
     var i=0;
    while (i<__data.length){
        

        
        afficher(__data[i],__data[i+1],__data[i+2]);
        i=i+3;
        console.log(i);

    } 
      
}

function afficher(_data,_data1,_data2){

    document.querySelector("#actors").innerHTML += 
    `
    
            <div class="row text-center py-3 ">
                <div class="col-sm-6 col-md-6 col-lg-4">

                    
                
                        <div class="card bg-dark text-light mb-3">
                        
                            <img src="${_data.img}" class="card-img-top rounded"  style="height: 35vw;
                            object-fit: cover;" alt="${_data.name}">
                            
                            <div class="card-body text-center ">
                            <h5 class="card-title text-warning">${_data.name}</h5>
                            <p class="card-text">${_data.birthday} </br>${_data.status}</p>
                            <a href="#" class="btn btn-primary btn-rounded">Read more...</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4">
               
                        <div class="card mb-3">
                            <img src="${_data1.img}" class="card-img-top rounded"  style="height: 35vw;
                            object-fit: cover;" alt="${_data1.name}">
                            <div class="card-body text-center">
                            <h5 class="card-title text-dark">${_data1.name}</h5>
                            <p class="card-text">${_data1.birthday} </br>${_data1.status}</p>
                            <a href="#" class="btn btn-danger btn-rounded">Read more...</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4">
               
                        <div class="card bg-dark text-light mb-3">
                            <img src="${_data2.img}" class="card-img-top rounded" style="height: 35vw;
                            object-fit: cover;"  " alt="${_data2.name}">
                            <div class="card-body text-center">
                            <h5 class="card-title text-warning">${_data2.name}</h5>
                            <p class="card-text">${_data2.birthday} </br>${_data2.status}</p>
                            <a href="#" class="btn btn-success btn-rounded">Read more...</a>
                        </div>
                    </div>
                </div>
                
                
        
            </div>
      
    `
}
get();