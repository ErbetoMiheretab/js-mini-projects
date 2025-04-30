const main = document.getElementById('main')
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calcWealthBtn = document.getElementById("calculate-wealth");


let data = []



//Fetch rndm user
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    
    const user = data.results[0]

    const newUser ={
        name: `${user.fName} ${user.lName}`,
        money: Math.floor(Math.random() * 1000000)
    }

    FcAddDatabase(newUser)
    
}

function addData(obj){
    data.push(obj)
}

getRandomUser()
