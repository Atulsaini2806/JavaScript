// fetching data from api or a url
// by async await

async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response); // it will give response object and it is return in string type so we changed it to json
    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ",error);
        
    }
}
// getAllUsers();

// by then and catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then((result)=>{
    const data = result.json();
    console.log(data);
    
}).catch((error)=>{
    console.log("Error: ",error);
    
})