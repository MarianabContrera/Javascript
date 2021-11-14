/// Crear un objeto VEHICULO a partir de una funcion contructora
/// y asignarle propiedades como peso, altura, cantidad de ruedas, velocidad, etc
/// y luego que impriman alguna por consola


function Vehiculo(ruedas, peso, color) {
    this.ruedas = ruedas;
    this.peso 	 = peso;
    this.color  = color;
}
const Auto = new Vehiculo(4, "1000kg", "violeta");
const Moto = new Vehiculo(2, "500kg", "Azul");

console.log( "Color del auto:", Auto.color);