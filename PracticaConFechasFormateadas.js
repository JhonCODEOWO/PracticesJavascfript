//Fechas en español

//Usando toLocaleString se puede presentar bien una fecha
const ahora = new Date();
const fecha = ahora.toLocaleString();

console.log(fecha);

//Para dar formato a las fechas es necesario tener en cuenta la siguiente tabla

// Clave	Posibles valores
// day	    "2-digit","numeric"
// month	"2-digit", "short", "long", "numeric"
// year	    "2-digit", "numeric"
// hour	    "2-digit", "numeric"
// minute	"2-digit","numeric"
// second	"2-digit", "numeric"
// hour12	false, true
// hourCycle	"h11", "h12", "h23", "h24"
// weekday	"short", "long", "narrow"
// timeZoneName	"short", "long"
// formatMatcher	"basic", "best-fit" (por defecto)
// timeZone	
// localeMatcher	"best-fit", "lookup"
// timeStyle	"short", "long", "medium", "full"
// dateStyle	"short", "long", "medium", "full"

//Ejemplo de formateo
//El idioma debe de ir primero junto con su país es-ES idioma/país
const fechaCorta = ahora.toLocaleString("es-ES" ,
{day: "2-digit", month:"short", year:"numeric"}
);

const fechaLarga = ahora.toLocaleString("es-ES" ,
{day:"2-digit", month:"long", year:"numeric"});

console.log(fechaCorta);
console.log(fechaLarga);

//Ejercicios
const idioma = "de-BE";
const idiomaJapon = "ja-JP"
const fechaCorta2 = ahora.toLocaleString(idioma,
	{ day: "2-digit", month: "2-digit", year: "numeric"});

const fechaLarga2 = ahora.toLocaleString(idioma,
	{ day: "2-digit", month: "long", year: "numeric"});
console.log(fechaLarga);

