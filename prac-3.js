
async function fetchMessage(apiUrl){
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error('Failed to fetch the data');
        }
        const data = await response.json();
        console.log('Data fetch successfully ',data);
    }
    catch(error){
        console.log('Error fetching data : ',error);

    }
}


const apiUrl = `https://jsonplaceholder.typicode.com/users`;
fetchMessage(apiUrl);
