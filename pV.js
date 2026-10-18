async function getUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if(!response.ok){
            throw new Error;
        }

        const user = await response.json();

        console.log(user);
    }
    catch(error) {
        console.error("Users not found");
    }
};

getUser();