const userInfo = {
    name: "Developer",
    email: "Developer01@gmail.com",
    id: "dev01",
}

const { name, email, id } = userInfo;

console.log(userInfo);

function calculateTotal(price, quantity) {
    return price + quantity;
}

console.log(calculateTotal(10, 40));