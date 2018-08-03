/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn (array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i], i, array);
    }

    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var q;

    if (initial === undefined) {
        q = array[0];

        for (var i = 1; i < array.length; i++) {
            q = fn(q, array[i], i, array);
        }
    } else {
        q = initial;

        for (i = 0; i < array.length; i++) {
            q = fn(q, array[i], i, array);
        }
    }

    return q;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var n,
        g = [];

    for (let key in obj) {
        n = key.toUpperCase();
        g.push(n);
    }

    return g;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

function slice(array, from, to) {
    var arr = [];

    if (from === undefined) {
        from = 0;
    }
    if (to === undefined) {
        to = array.length;
    }
    if (to < 0) {
        to = array.length + to;
    }
    if (to > array.length) {
        to = array.length;
    }
    if (from < 0 && from < (array.length * -1)) {
        from = 0;
    }
    if (from < 0 && from >= (array.length * -1)) {
        from = array.length + from;
    }
    for (var i = from; i < to; i++) {
        arr.push(array[i]);
    }

    return arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

function createProxy(obj) {
    var proxy = new Proxy(obj, {
        set(obj, property, value) {
            obj[property] = value * value;

            return true;
        }
    })

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};