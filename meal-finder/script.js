// https://www.themealdb.com/api/json/v1/1/random.php

const randomBtn = document.getElementById('random');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.getElementById('search');
const singleMealBox = document.getElementById('single-meal');
const mealsBox = document.getElementById('meals');
const heading = document.getElementById('result-heading');

// Fecths random db
const fetchRandomData = () => {
    singleMealBox.innerHTML = '';
    mealsBox.innerHTML = '';
    heading.innerText = '';

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => data.meals[0])
        .then(meal => {
            const randomContent = singleMealContent(meal);
            singleMealBox.insertAdjacentHTML('afterbegin', randomContent);
        })
}

// Fetch data by ingredient
const fetchIngredientData = () => {
    const search = document.getElementById('search').value;
    singleMealBox.innerHTML = '';
    mealsBox.innerHTML = '';

    if(search.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
            const meals = data.meals;

            if(meals === null) {
                heading.innerText = `No results for ${search}`;
            } else {
                const mealsContent = meals.map(meal =>
                    `<article>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <h3>${meal.strMeal}</h3>
                    </article>`
                ).join('');

                mealsBox.insertAdjacentHTML('afterbegin', mealsContent);
                heading.innerText = `We found ${meals.length} meals for "${search}"`;

                // sets the single recipe on the clicked meal
                const article = document.querySelectorAll('.meals article');
                article.forEach(item => {
                    item.addEventListener('click', () => {
                        singleMealBox.innerHTML = '';
                        const title = item.querySelector('.meals h3').innerText;
                        const matchingEl = meals.find(meal => meal.strMeal == title);

                        const matchingMealContent = singleMealContent(matchingEl);
                        singleMealBox.insertAdjacentHTML('afterbegin', matchingMealContent);
                    })
                })
            }
        })
    } else {
        heading.innerText = 'Search for an ingredient or click on the random meal button';
    }
}

// Creates the single meal HTML content
const singleMealContent = (object) => {
    return `<h2>${object.strMeal}</h2>
    <img src="${object.strMealThumb}" alt="${object.strMeal}">
    <h3>${object.strCategory} - ${object.strArea}</h3>
    <p>${object.strInstructions}</p>`;
}

randomBtn.addEventListener('click', fetchRandomData);
searchBtn.addEventListener('click', fetchIngredientData);
searchInput.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        e.preventDefault();
        fetchIngredientData();
    }
});

// limpiar el search y los meals tras una nueva búsqueda