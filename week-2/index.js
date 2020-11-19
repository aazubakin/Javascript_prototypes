module.exports = Collection;
/**
 * Конструктор коллекции
 * @constructor
 */
function Collection(arr) {
  this.arr = arr ? arr : [];
}

// Методы коллекции
Collection.prototype.values = function () {
  return this.arr;
};
// другие методы
Collection.prototype.count = function () {
  return this.arr.length;
}
Collection.prototype.at = function (pos) {
  if (pos < 1 || pos > this.arr.length) return null;
  return this.arr[pos - 1];
}
Collection.prototype.append = function (element) {

  if (element instanceof Collection) {
    for (let i = 0; i < element.arr.length; i++) {
      this.arr.push(element.arr[i]);
    }//this.arr.concat(element.arr)
  }
  else this.arr.push(element);
}
Collection.prototype.removeAt = function (pos) {
  if (pos < 1 || pos > this.arr.length) return false;

  this.arr.splice(pos - 1, 1);
  return true;
}
/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
  return new Collection(arr)
};