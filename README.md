# Segunda prueba del proceso de selección.

Este repositorio contiene una mini app que se encarga de mostrar las películas/series que se obtienen de la api de [OMDB](http://www.omdbapi.com/).

### Puesta en marcha.

Hazte fork del repositorio para realizar la prueba.
Debes tener [node](https://nodejs.org/es/) y [yarn](https://yarnpkg.com/) instalados.
Entra en el directorio y ejecuta `yarn` para descargar las dependencias.
Después, simplemente ejecutando `yarn start` se arrancará la aplicación.

### Instrucciones.

La idea es que dediques un par de horas más o menos.
Si te quedas bloqueado o tienes cualquier problema no dudes en parar y preguntarnos por mail.
Si no somos capaces de resolver tus dudas por mail, se podría hacer una videoconferencia rapidita para ver el problema.
Ahora mismo todo está implementado en el fichero `App.js`, pero no tiene que quedar así necesariamente. Si lo ves oportuno puedes refactorizar y extraer funcionalidad a diferentes ficheros.
La idea es que veamos como programarías en un proyecto real.
Cuando termines el ejercicio, pásanos el link para ver el código.

### Comportamiento inicial.

Al arrancar la aplicación verás que muestra 10 resultados.
Esto es porque hace una petición inicial a la api con el parámetro de búsqueda `king`.

```
const response = await fetch('http://www.omdbapi.com/?apikey=a461e386&s=king')
```

### Primera tarea.

Queremos buscar en la api de OMDB lo que se escriba en la caja de búsqueda.
Debes hacer que en lugar de pasar el parámetro de búsqueda `king` hardcodeado, ese parámetro sea lo que haya en el input cuando se haga click en el botón `Search`.

### Segunda tarea.

La api devuelve los resultados de 10 en 10. Acepta un parámetro `page` para indicar la página que quieres que devuelva en los resultados. Por ejemplo:

```
const response = await fetch('http://www.omdbapi.com/?apikey=a461e386&s=king&page=5')
```

Queremos que implementes los click en las flechas de la derecha e izquierda de manera que al clickar en la derecha se incremente en 1 el parámetro `page`, y clickando en la izquierda se decremente en 1.
Los resultados se deben actualizar con lo que devuelva la api.

### Precauciones

- El hook `useEffect` se está utilizando para que al entrar en la home haya unos resultados iniciales.
  Tendrás que valorar si el hook sigue siendo necesario cuando implementes las features que se piden.
  Si no te resulta muy familiar el hook tienes que leer un poco sobre él y como manejar peticiones asíncronas en su interior, ya que un mal uso puede dar lugar a bucles infinitos.
- La api de OMDB devuelve dos veces la misma película al buscar con la palabra "king". Eso hace que cuando se pintan esas primeras 10 películas haya un error en la consola porque encuentra dos items con la misma key. Alguna idea de como gestionarlo?

### Memoria

- He creado dos carpetas, una de cliente y otra de servidor.

- En la carpeta de cliente tenemos una carpeta de componentes donde he añadido dos componentes: un Search y un MoviesList.
  En el Search está toda la lógica del buscador y en el MoviesList se muestran los resultados de la busqueda.
  He decidido dejar el UseEffect con una busqueda inicial por "king" para que haya una carga inicial con películas y que no solo haya un simple input al entrar,
  pero se puede buscar en el search por lo que se quiera, y si no encuentra películas, saldrá el mensaje de error que nos devuelve la propia API cuando no obtiene       resultados.
  Las flechas de derecha a izquierda incrementan y decrementan en 1 y he puesto hasta un máximo de 100 paginas que es el máximo que nos deja la API.
  
- En la carpeta de server tenemos la llamada fetch y una carpeta de config con las variables para la url del endpoint

