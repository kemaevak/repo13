document.addEventListener("DOMContentLoaded", () => {
    // Изменение заголовка
    const header = document.querySelector('h1');
    header.innerText = "Измененный заголовок";
  
    // Добавление порядковых номеров к элементам списка
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach((item, index) => {
      item.innerText = `Элемент списка ${index + 1}`;
    });
  
    document.addEventListener("DOMContentLoaded", () => {
        const img = document.querySelector('img');
        img.setAttribute('src', 'image7.jpg'); 
      });
      
    // Изменение ссылки
    const link = document.querySelector('a');
    link.setAttribute('href', 'https://kemaevak.github.io/repo6/');
    link.innerHTML = 'Новый текст ссылки';
  
    // Добавление нового элемента списка
    document.getElementById('add-item').addEventListener('click', () => {
      const ul = document.querySelector('ul');
      const newItem = document.createElement('li');
      newItem.innerText = `Новый элемент ${ul.children.length + 1}`;
      ul.appendChild(newItem);
    });
  
    // Удаление последнего элемента списка
    document.getElementById('remove-item').addEventListener('click', () => {
      const ul = document.querySelector('ul');
      if (ul.children.length > 0) {
        ul.removeChild(ul.lastElementChild);
      }
    });
  
    // Изменение цвета текста абзаца
    const paragraph = document.querySelector('p');
    document.getElementById('change-color').addEventListener('click', () => {
      paragraph.style.color = paragraph.style.color === 'blue' ? 'red' : 'blue';
    });
  
    // Скрытие/показ абзаца
    document.getElementById('toggle-paragraph').addEventListener('click', () => {
      paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
    });
  
    // Работа с размерами элемента
    const element = document.querySelector('div');
    const rect = element.getBoundingClientRect();
    console.log(`Ширина: ${rect.width}, Высота: ${rect.height}`);
  
    // Форма проверки
    document.getElementById('myForm').addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      if (name === '' || email === '') {
        alert('Пожалуйста, заполните все поля!');
      } else {
        alert('Форма успешно отправлена!');
      }
    });
  });
  