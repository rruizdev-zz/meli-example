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
  - AJAX: Las páginas cargan instantáneamente con un formato genérico mientras el usuario no observe contenido alguno. Sin embargo, el cliente hará llamadas asíncronas y cuando éstas estén disponibles, se observarán en la página reemplazando al formato genérico antes mencionado.

### Escalabilidad
  - Capas: A fin de que la solución pueda progresar en un futuro, la idea de implementar usando componentes no suena una idea alocada. Es por eso que se establecieron diferentes capas, tanto en la solución `servidor` como `cliente`, a fin de poder conocer _a priori_ cuales son las responsabilidades.
    - _Routes:_ Básicamente, define las rutas/endpoints accesibles desde cualquier navegador y delega a los controllers la funcionalidad de procesar su respuesta.
    - _Controllers:_ Ejecuta la obtención de la respuesta y a base del resultado obtenido, lo procesa para devolver la respuesta necesaria.
    - _Service:_ Genera las solicitudes siguiendo un esquema base, ya sea a un servicio interno o una interfaz externa.
  - Configuración: Para prevenir la duplicación de nombres, descripciones y la dificultad que implica modificar URL de Endpoints en una solución, se estableció un archivo de configuración unificado con la finalidad de suministrar datos comunes a toda la solución. Por ejemplo, URL, títulos, descripciones y todo lo que tuviera un valor definido.
  
  _Artículo en desarrollo..._
