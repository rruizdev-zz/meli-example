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

- Abrimos un terminal.
- Clonamos el repositorio en un directorio a elección: `git clone https://github.com/robrui/meli-example.git`
- Entramos a la carpeta que descargó del repositorio: `cd meli-example`
- Corremos el servidor:
  - Ingresamos al directorio del servidor: `cd server`
  - Instalamos sus dependencias: `npm install`
  - Lo corremos, pudiendo hacerlo de dos modos (ejecutar el que sea necesario):
    - Debug: `DEBUG=server:* npm start`
    - Productivo: `npm start`
    
    Ahora podés probar con las URL anteriores que devuelve un JSON de acuerdo a lo requerido. Si la URL no es válida por alguna razón, devolverá un JSON que tendrá los siguientes campos:
      - `stat`: Código de error (p. ej. 404 o 500).
      - `msg`: Mensaje describiendo el error.
      
- Corremos el cliente:
  - Abrimos otro terminal, ya que en la anterior está corriendo el servicio y no debe parar.
  - Ingresamos al directorio del cliente: `cd client`
  - Instalamos las dependencias: 
    - Node Package Manager: `npm install`
    - Bower: `bower install`
    
    Es necesario correr ambos comandos para que la aplicación funcione correctamente.
  - Lo corremos, y podemos hacerlo de dos modos como para el caso anterior (ejecutar el que sea necesario):
    - Debug: `DEBUG=client:* npm start`
    - Productivo: `npm start`
    
¡Listo! Ya se pueden enviar mensajes entre ambas aplicaciones.
