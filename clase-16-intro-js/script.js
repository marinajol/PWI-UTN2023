/* comentario de JS= alt + shift + a 

lenguaje compilado ---> compilador ---> machine code (lenguaje de bajo nivel)

lenguaje interpretado (Java) --> interprete (Java virtual machine)--> el código se interpreta en vivo y se pasa a código máquina

Alto nivel (se asemejan al lenguaje humano) -------------- Bajo nivel (menor semejanza al lenguaje humano, c, cobol)
Js, python.                                                      Mayor control

JAVASCRIPT

Javascript es un lenguaje de programación interpretado y de alto nivel. 
(Intérprete= V8 shine, sirve para cualquier sistema operativo), compilado just in time
Débilente tipado (contrario a Java)

VM: virtual machine

*/

console.log('Hola')

/* 
TIPOS DE DATOS primitivos

Numbers: datos numéricos (9, -90, 9.5 flotante, Infinity, NaN)
Strings: cadena de texto, se escriben entre comillas simples o dobles.
Booleans: verdadero o falso, 0 o 1, true or false.
Undefined: representa que un dato no está definido (Ej: cuándo termina el curso? undefined)
Null: no vale nada, ausencia de valor
(symbol)

*/

Number
String
Boolean
undefined
null

/* 

OPERADORES ARITMÉTICOS
Suma +
Resta -
Multiplicación *
División /
Resto de la división %

Siempre devuelven un número: - * / %

7 - 9 devuelve número
true * 9 devuelve número (9, porque true tiene un valor interno que es 1)

true= 1
false= 0

Para averiguar el tipo de dato de una operación: typeof
*/

typeof 'hola'

/* 
SUMA +
cuando hay un string en una suma, se concatena
transforma el resultado en un string

si no hay string, hace la suma normal
*/

/* 
COMPARADORES --> se necesitan de a dos para funcionar, siempre devuelven booleanos
== comparar igualdad (no compara tipo de datos)
=== estricta igualdad 
!= distinto de
!== diferencia estricta
> mayor
< menor
>= mayor igual
<= menor igual

NULL= 
null + 1 es 1           es 0?
null == 0 es false      no es 0
null > 0 es false       no es mayor a 0
null < 0 es false       no es menor a 0
null <= 0 es true       es menor igual a 0????
NULL NO VALE NADA, es ausencia de valor

*/
