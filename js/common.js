'use strict';

var sidebar = { //объект боковой панели
	tag: document.getElementById('list-group'), //присваеваю ему тег
	select: null, //активная ссылка
	event: function(){ //метод обработчик события
		var self = this; //фиксирую контекст вызова метода (ссылаемся на sidebar)

		this.tag.onclick = function(event) { //событие на клик по sidebar.tag

		  var target = event.target; // создаём переменную (элемент на который мы кликнули)

		  if (target.tagName != 'A') return; // если мы клик не на тег A, то выходим из функции
		 	return swapClass(target); // если запись выше не сработала, то возвращаем
		}                           // функцию с параметром target (тот элемент на который мы кликнули)
	},
};

sidebar.event(); // вызов метода 

function swapClass (node) { //функция которую мы вызываем при клике
  if (self.select) { // если sidebar.select = true (то есть существует)
    self.select.classList.remove('active'); // то удаляем у него класс active
  }
  self.select = node; // присваиваем sidebar.select новое значение (напомню node это target, то куда мы клик)
  self.select.classList.add('active'); // и наконец нашему новому значению присваиваем класс active
}
