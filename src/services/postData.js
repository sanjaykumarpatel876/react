export function PostData(type, userData){
    let BaseUrl = 'http://localhost/api/';
    //console.log('checker', JSON.stringify(userData));
    return new Promise((resolve,reject) =>{
        fetch(BaseUrl+type, {
            method:'POST',
           /* headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },*/
            body:JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            resolve(responseJson);
        })
        .catch((error) =>{
            reject(error);
        });
    });
}