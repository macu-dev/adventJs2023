# adventJs2023
## Problema: Identificación de Juguetes Duplicados en la Fábrica del Polo Norte

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único. Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

El desafío es encontrar el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño. En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

### Ejemplos

1. `const giftIds = [2, 1, 3, 5, 3, 2]`
   
   Resultado esperado: 3
   - Aunque el 2 y el 3 se repiten, el 3 aparece primero por segunda vez.

2. `const giftIds2 = [1, 2, 3, 4]`
   
   Resultado esperado: -1
   - Es -1 ya que no se repite ningún número.

3. `const giftIds3 = [5, 1, 5, 1]`
   
   Resultado esperado: 5
   - El 5 es el primer número que se repite.

### Solución - [Ver](https://github.com/macu-dev/adventJs2023/blob/main/Day1/day1.js)
