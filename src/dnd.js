/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
 const homeworkContainer = document.querySelector('#homework-container');
 const button = document.createElement('button');
 homeworkContainer.appendChild(button);
 button.textContent = 'Нажми меня';

 button.addEventListener('click', function(e) {
  e.preventDefault();  
  newDiv = document.createElement('div');
  newDiv.style.width = getRandomInt(150, document.body.clientWidth) + 'px';
  newDiv.style.height = getRandomInt(150, document.body.clientHeight) + 'px';
  newDiv.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  newDiv.style.position = 'absolute';
  newDiv.style.top = getRandomInt(50, 800) + 'px';
  newDiv.style.left = getRandomInt(50, 800) + 'px';
  homeworkContainer.appendChild(newDiv);

  let newDivs = document.getElementsByTagName('div');
  let downX = 0,
  downY = 0,
  dragElement;
        // clickElement = document.getElementsByTagName('div');
        // console.log(clickElement);

        let mouseDown = function(e) {
          dragElement = e.target;
          downX = e.offsetX;
          downY = e.offsetY;
          newDiv.addEventListener('mousemove', mouseMove);
        };  

        let mouseMove = function(e) {
          dragElement.style.top = (e.clientY - downY) + 'px';
          dragElement.style.left = (e.clientX - downX) + 'px';
        };

        let mouseUp = function(e) {
          newDiv.removeEventListener('mousemove', mouseMove);
        };

        newDiv.addEventListener('mousedown', mouseDown);    
        newDiv.addEventListener('mouseup', mouseUp);  

      }); 



 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
