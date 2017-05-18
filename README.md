
## Intro

Por favor lea la documentación antes de bajar el repositorio y realizar cambios en el mismo.
A continuación encontrará instrucciones para configurar su equipo con el ambiente de trabajo necesario,
como así también una descripción de las tareas más comunes.

### En primer lugar abrir el prompt de tu sistema operativo

* Si usas Microsoft Windows usa el cmd.exe
* Si usas Linux (Debian/Ubuntu) abre tu terminal

Ya abierto el terminal ubica el sitio donde clonaremos el proyecto.

### Ejemplo Windows

```
cd c:\wamp64\www
```

### Ejemplo Linux

```
cd /var/www/html
```

Nota el lugar donde clonaremos este proyecto no necesariamente tienen que ser esas rutas. Sino para que tengan idea debemos que tener una ruta destino donde el proyecto va a ejecutarse.

### clonar el repositorio

```
cd ~/Code
git clone https://github.com/USERNAME/yeoman_prototype_front.git
```
### Instalar el servidor nodejs.

Es importante tener instalado el servidor nodeJS en nuestro equipo y para ello lo deberás efectuar mediante su sitio oficial.
* [Pagina oficial de nodejs](https://nodejs.org/en/)
* [Instalar NodejS en Linux Debian ](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

### Instalar las dependencias globales

# Gulp 

```
npm install -g gulp-cli
```

# bower 

```
npm install -g bower
```

# Yeoman Generator

```
npm install -g yo
npm install -g generator-fountain-angular1
```

### Variables globales de entorno

Es importante definir en el proyecto la variable global de entorno que no es mas que un archivo .json donde iran los atributos de conexion al rest api y entre otras funcionalidades.

Para ellos nos dirigimos en nuestra consola y ejectuamos esta linea de comando.

```
cp constants/envexample.json constants/environment.json
```

Nota: debes estar el carpeta destino de tu proyecto.

### Compilación o ejecución del proyecto.

```
gulp serve
```
