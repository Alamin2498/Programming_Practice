function randomUser (){
    console.log('random user cumming');
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data=> displayUser(data))
}

const displayUser =user=>{
    
    let userGender= document.getElementById('gender');
    let userName = document.getElementById('name');
    let gender = user.results[0].gender;
    let name = user.results[0].name.first +' '+user.results[0].name.last;
    console.log(gender);
    userGender.innerHTML =gender;
    userName.innerHTML=name;
}


randomUser();