//function that returns ISRO spacecrafts data
async function getIsroSpacecraftsData(){
    try {
        const spacecraftsData= fetch('https://isro.vercel.app/api/spacecrafts'); //using fetch to retrieve data

        //returning spacecrafts data
         return spacecraftsData.then(response=>response.json()).then(data=>data).catch(error=>{
            console.log(error)
            return error;
         })

    } catch (error) {
        console.log(error);
    }
}

//function to display spacecrafts data
async function displayIsroSpacecraftsData(){
    const spacecraftsData=await getIsroSpacecraftsData(); //await is used to get the json data but not promise

    //accessing the div element where data is to be displayed
    let displaySpacecraftsDiv = document.querySelector(".display-data");
    displaySpacecraftsDiv.innerHTML="";

    //displaying the character data on webpage
    spacecraftsData.spacecrafts.forEach(spacecraft=>{
        displaySpacecraftsDiv.innerHTML+=`
        <div class="spacecraft-card">
            <h4> Name : ${spacecraft.name}</h4>
        </div>
    `
    })
}