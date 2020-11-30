const movieSelect = document.getElementById('movie');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const text = document.querySelector('p');
const count = document.querySelector('.count');
const total = document.querySelector('.total');

const populateUI = () => {
  const selectedSeats = JSON.parse(window.localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = window.localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

populateUI();

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  window.localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = movieSelect.value * selectedSeatsCount;
}

// Sets the text and paint the seats
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Cleans the text after changing the movie
movieSelect.addEventListener('change', (e) => {
  updateSelectedCount();

  window.localStorage.setItem('selectedMoviePrice', e.target.value);
  window.localStorage.setItem('selectedMovieIndex', e.target.selectedIndex);
});

updateSelectedCount();