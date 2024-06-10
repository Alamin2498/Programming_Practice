// const meals =()=>{
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
// .then(res=> res.json())
// .then(data=> loadMeals(data))
// }

// function loadMeals(meals){
//     console.log(meals);
//     let mealContainer = document.getElementById('meal-container');
//     for(let i = 0; i<meals.length;i++){
//         let meal = meals[i];
//         console.log(meal);
        

//         let mealDiv = document.createElement('div');
//         mealDiv.classList.add('col');
//         mealDiv.innerHTML =`
//         <div class="card">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         </div>
//       </div>
//     </div>
//         `
//         mealContainer.appendChild(mealDiv);


//     }
// }
// meals();

// let loadMeals =()=>{
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
// .then(res => res.json())
// .then (data => displayMeals(data.meals))
// }

//   function displayMeals(meals){
//     console.log(meals);
//     let mealContainer= document.getElementById('meal-container');

//     for(let i =0; i<meals.length; i++){
//       let meal = meals[i];
//       console.log(meal);

//       let mealDiv = document.createElement('div');
//       mealDiv.classList.add('col');
//       mealDiv.innerHTML =`
//       <div class="card">
//           <img src="..." class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           </div>
//         </div>
//       `
//       mealContainer.appendChild(mealDiv);

//     }
    
//   }



// loadMeals()




function loadMeals(sarchText){
let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${sarchText}`;

  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}
  function displayMeals(meals){
    console.log(meals);


    let mealContainer = document.getElementById('meal-container');
    mealContainer.innerText='';
    
   for(let i = 0; i<meals.length;i++){
    let meal = meals[i];
    console.log(meal);

    let mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML =`
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title:${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>

    `
    mealContainer.appendChild(mealDiv);
   

   }

  }
function btnClick(){
  console.log('btn has been clicked');
  let sarchText =document.getElementById('sarchText').value;
  console.log(sarchText);
  loadMeals(sarchText);
}

loadMeals('burger');

