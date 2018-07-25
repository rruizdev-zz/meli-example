![meli-example](https://raw.githubusercontent.com/robrui/meli-example/master/client/images/Logo_ML%402x.png.png)
---
Ésta es una aplicación de prueba, creada para buscar artículos y obtener detalles provenientes de una API externa. Por tal razón, la misma se divide en dos soluciones:
- **Servidor:** La cual se conectará a las interfaces externas y transformará sus respuestas a mensajes que nuestro sistema cliente deba entender.
- **Cliente:** Ésta se conecta al servidor anteriormente mencionado y tendrá dos finalidades en el mismo.
  - Visualizar la información que el usuario solicita, para lo cual hará una consulta al sistema integrado previamente.
  - Gestionar las solicitudes de datos por parte del usuario, evitando que las direcciones del servidor no queden expuestas.
  
## Características de Calidad
### Performance
  - Minificación de contenido: Se minifican todos los archivos que utiliza el navegador para hacer funcionar la aplicación. El caso particular es el de las hojas de estilos, que fueron desarrollados con SASS y la solución lo convierte a un archivo minificado bajo el formato CSS3.
  - AJAX: Las páginas cargan instantáneamente con un formato genérico mientras no se obtenga contenido alguno. Sin embargo, el cliente hará llamadas asíncronas y cuando éstas estén disponibles, se observarán en la página reemplazando al formato genérico antes mencionado.

### Escalabilidad
  - Capas: A fin de que la solución pueda progresar en un futuro, la idea de implementar usando componentes no suena una idea alocada. Es por eso que se establecieron diferentes capas, tanto en la solución _servidor_ como _cliente_, a fin de poder conocer _a priori_ cuales son las responsabilidades.
    - **Routes:** Básicamente, define las rutas/endpoints accesibles desde cualquier navegador y delega a los controllers la funcionalidad de procesar su respuesta.
    - **Controllers:** Ejecuta la obtención de la respuesta y a base del resultado obtenido, lo procesa para devolver la respuesta necesaria.
    - **Service:** Genera las solicitudes siguiendo un esquema base, ya sea a un servicio interno o una interfaz externa.
  - Configuración: Para prevenir la duplicación de nombres, descripciones y la dificultad que implica modificar Endpoints en una solución, se estableció un archivo de configuración unificado con la finalidad de suministrar datos comunes a toda la solución. Por ejemplo, URL/path, títulos, descripciones y todo lo que tuviera un valor definido.
 
### Usabilidad
  - Errores: Puede ocurrir que el usuario no ingrese a la ruta correcta y no tenga la oportunidad de poder obtener lo que necesita, teniendo que abandonar el sitio y entrando a la dirección principal en el peor de los casos. Es por eso que se implementaron mensajes de error manteniendo la barra de búsqueda con el fin de que de igual modo pueda buscar lo que necesita.

### SEO
  - Tags: Se utilizaron las mismas etiquetas y descripciones (meta) que se utilizan hoy en el sitio productivo. Todo su contenido proviene del archivo de configuracion `config.js`.

## Decisiones establecidas
A fin de mantener la estabilidad de la aplicación, hay características que se omitieron o se realizaron de un modo alternativo. Algunas de las issues lo incluyen, bajo la etiqueta `design`.

## Endpoints
- Cliente _(Puerto default: 1800)_:
  - Principal: `localhost:1800/`
  - Resultados: `localhost:1800/items?search=TU_BUSQUEDA`
  - Detalle: `localhost:1800/items/ID_ITEM`
- Servidor _(Puerto default: 1810)_:
  - Búsqueda: `localhost:1810/api/items?q=​TU_BUSQUEDA`
  - Detalle: `localhost:1810/api/items/​ID_ITEM`

A su vez, desde el lado cliente se establecieron endpoints adicionales, con el fin de asegurar la fácil modificación de los endpoints del servidor desde el archivo de modificación, en caso de sufrir modificaciones. Los mismos son los siguientes:

- Búsqueda: `localhost:1800/query/TU_BUSQUEDA`
- Detalle: `localhost:1800/items/query/ID_ITEM`

## Descarga y configuración

_En desarrollo..._
