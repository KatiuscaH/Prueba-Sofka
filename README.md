# Prueba-Sofka

## Display LCD

### Objetivo: Crear un programa que imprime números en estilo de una pantalla LCD

### Entrada: 
- La entrada contiene varias líneas. 
- Cada línea contiene 2 números separados por coma. 
- El primer número representa el tamaño de la impresión (entre 1 y 10 – esta variable se llama “size”). 
- El segundo número es el número a mostrar en la pantalla. 
- Para terminar, se debe digitar 0,0. Esto terminará la aplicación.


### Salida: 
- Imprimir los números especificados usando el carácter “-“ para los caracteres horizontales, y “|” para los verticales.
- Cada dígito debe ocupar exactamente size+2 columnas y 2*size + 3 filas.
- Entre cada impresión debe haber una línea blanca.

-----

# Run code

Para ejecutar el código debe ejecutarse lo siguiente inicialmente

```
npm install 
npm start
```

Ejecutar el archivo LCD.js
```
node lcd.js
```
```
Ingrese los números (X,XXX), donde el primero es el tamaño y después de la coma el número a mostrar. 
Finalice con 0,0> 2,12345
           - -     - -             - -
       |       |       | |     | |
       |       |       | |     | |
           - -     - -     - -     - -
       | |             |       |       |
       | |             |       |       |          
           - -     - -             - -
Ingrese los números (X,XXX), donde el primero es el tamaño y después de la coma el número a mostrar.
Finalice con 0,0> 3,67890
   - - -     - - -     - - -     - - -     - - -
 |                 | |       | |       | |       |
 |                 | |       | |       | |       |
 |                 | |       | |       | |       |
   - - -               - - -     - - -
 |       |         | |       |         | |       |
 |       |         | |       |         | |       |
 |       |         | |       |         | |       |
   - - -               - - -     - - -     - - -
Ingrese los números (X,XXX), donde el primero es el tamaño y después de la coma el número a mostrar. 
Finalice con 0,0> 0,0
Software Finalizado
```
# Test

Para ejecutar el test

```
npm run test
```
