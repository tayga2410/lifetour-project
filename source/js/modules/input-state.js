const input = document.querySelector('input');

// Наведение
input.addEventListener('mouseover', () => {
  input.style.color = '#0266C1';
});

input.addEventListener('mouseout', () => {
  if (!input.matches(':focus')) {
    input.style.color = '#2D383F';
  }
});

// Фокус
input.addEventListener('focus', () => {
  input.style.color = '#0266C1';
});

input.addEventListener('blur', () => {
  input.style.color = '#2D383F';
});

// Активное состояние
input.addEventListener('mousedown', () => {
  input.style.color = '#0266C1';
});

input.addEventListener('mouseup', () => {
  if (!input.matches(':focus')) {
    input.style.color = '#2D383F';
  }
});
