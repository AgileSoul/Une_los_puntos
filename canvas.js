var area =document.getElementById("dibujo");
var lienzo= area.getContext("2d");

var xi= 0 , yi = 0, xf = 0, yf= 0;

/* iniciamos 2 variables que luego nos permitiran calcular la posiciones relativas width y height 
respecto al  dispositivo con la posicion del elemento canvas  */

var canvasX = 0 , canvasY = 0 ;

area.addEventListener("mousedown" , mouseDown);
area.addEventListener("mouseup" , mouseUp);

//pasar al siguiente nivel y anterior Nivel

var nivelActual = 0;

var btnSgt = document.getElementById("btnSiguienteNivel");
btnSgt.addEventListener("click" , siguienteNivel );

var btnAnt = document.getElementById("btnNivelAnterior");
btnAnt.addEventListener("click" , nivelAnterior );

var niveles = [];
niveles[0]= new Image();
niveles[0].src = "./img_Niveles/nivel1.png";
niveles[1]= new Image();
niveles[1].src = "./img_Niveles/nivel2.png";
niveles[2]= new Image();
niveles[2].src = "./img_Niveles/nivel3.png";


function dibujarLinea(xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = "#5c6b73";
    lienzo.lineWidth = 1.5 ;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


    /* la funcion getBoundingClientRect() nos permite ver el tamaño de un elemento y su posicion relativa
    respecto a la ventana de visualizacion. */
    
function mouseDown(evt)
{   

    canvasX = dibujo.getBoundingClientRect().x ; 
    canvasY = dibujo.getBoundingClientRect().y ; // getBoundingClientRect().y nos devuelve la posicion relativa en el eje y

    /* Restamos la posicion del mouse en el DOM con la posicion relativa del canvas para obtener 
    la posicion del mouse dentro del canvas y poder dibujar dentro de el*/ 

    xi = evt.clientX - canvasX;
    yi = evt.clientY - canvasY; // evt.clientY nos devuelve la posicion del mouse en el eje Y con respecto al DOM
}

function mouseUp(evt)
{
    xf = evt.clientX - canvasX;
    yf = evt.clientY - canvasY;
    dibujarLinea(xi, yi, xf, yf);
}

function siguienteNivel()
{
    if(nivelActual < niveles.length - 1) // validamos que el nivel actual sea menor que el numero total de niveles
    {
        nivelActual = nivelActual + 1;
        lienzo.drawImage( niveles[nivelActual] , 0 , 0); //dibuja la imagen nivel2 en el punto 0, 0 de nuestro canvas
    }
}

function nivelAnterior()
{
    if( nivelActual != 0)
    {
        nivelActual = nivelActual - 1;
        lienzo.drawImage( niveles[nivelActual] , 0 , 0);
    }
}



