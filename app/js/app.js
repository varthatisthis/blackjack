console.log('sdfsjfsdfsd');

var baraja = [];

var croupier = {};

croupier.barajar = function () {};

var jugador = {};

jugador.mano = [];

jugador.pasar = function (){
    if (this.mano[0] > 9) {
        return true;
    }
};

function blackjack () {
    var miBaraja =  baraja;
    var miCroupier = croupier;
    var miJugador = jugador;
}