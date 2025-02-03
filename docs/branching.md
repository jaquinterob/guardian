# Estrategia de Manejo de Ramas en Git

Este documento describe cómo manejaremos las ramas y Pull Requests (PRs) en el proyecto. Con una rama `develop` como el lugar principal de trabajo, los desarrolladores harán PRs para fusionar sus cambios a `develop` y, una vez que todo esté probado y listo, se hará un PR de `develop` a `master` para despliegue en producción.

---

## Estructura de Ramas

### 1. `master` (Rama Principal y Protegida)
La **rama `master`** es la rama principal del proyecto y debe contener solo código estable y probado. Esta rama está protegida, lo que significa que no se puede modificar directamente sin pasar por un Pull Request (PR).

El código solo se fusiona a `master` desde `develop` a través de un PR aprobado. Solo los miembros con permisos especiales (como DevOps) se encargan del despliegue.

### 2. `develop` (Rama de Desarrollo)
La **rama `develop`** es el lugar donde se realizan las integraciones diarias. Los desarrolladores deben hacer sus cambios en ramas separadas (como `feature/<nombre>` o `bugfix/<nombre>`) y luego hacer un PR a `develop` cuando sus cambios estén listos para integrarse.

Cuando `develop` está estable y listo para producción, se hace un PR de `develop` a `master` para despliegue.

---

## Proceso de Creación y Uso de Ramas

### 1. Crear una Nueva Rama Desde `develop`
Cada vez que empieces a trabajar en una nueva funcionalidad o corrección, crea una rama desde `develop`. Esto garantiza que todos los desarrolladores estén trabajando sobre la base de código más actualizada.

1. Cambia a la rama `develop`:
   ```bash
   git checkout develop        # Cambia a la rama de desarrollo
   ```

2. Actualiza tu copia local de `develop`:
   ```bash
   git pull origin develop      # Trae los cambios más recientes del repositorio remoto
   ```

3. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature/login-system  # Crea y cambia a una nueva rama
   ```

Ahora puedes comenzar a trabajar en tu funcionalidad.

---

### 2. Hacer Cambios y Confirmar (Commit)
Mientras trabajas en tu rama, realiza cambios y confirma (commit) esos cambios para registrarlos. Es importante que los commits sean pequeños y claros.

1. Agrega los archivos modificados:
   ```bash
   git add .                    # Agrega todos los archivos modificados al área de preparación
   ```

2. Realiza un commit con un mensaje descriptivo:
   ```bash
   git commit -m "Implementar sistema de login con autenticación"  # Realiza un commit con el mensaje adecuado
   ```

---

### 3. Subir la Rama al Repositorio Remoto
Cuando hayas realizado algunos commits, es hora de subir tu rama al repositorio remoto.

1. Empuja tu rama al repositorio:
   ```bash
   git push origin feature/login-system  # Empuja la rama de trabajo al repositorio remoto
   ```

Ahora tu rama está disponible para ser revisada por otros miembros del equipo.

---

### 4. Crear un Pull Request (PR) a `develop`
Una vez que hayas terminado de trabajar en tu rama, crea un PR para fusionar los cambios en `develop`.

1. Ve al repositorio en GitHub, GitLab o la plataforma que uses.
2. Dirígete a la sección de **Pull Requests** y haz clic en **"New Pull Request"**.
3. Asegúrate de que la rama base sea `develop` y la rama de comparación sea tu rama de trabajo (`feature/login-system`).
4. Añade un título descriptivo y una explicación detallada de los cambios realizados.
5. Envía el PR para revisión.

### 5. Revisión de PR a `develop`
Una vez enviado el PR a `develop`, es importante que los compañeros de equipo revisen los cambios. Asegúrate de que el PR sea claro y que cualquier miembro del equipo pueda probar los cambios que has realizado.

---

### 6. Fusión de `develop` a `master` para Producción
Cuando `develop` esté completamente probado y listo para producción, se debe hacer un PR de `develop` a `master`. Esto garantiza que solo el código aprobado en `develop` se fusiona en la rama `master` para el despliegue.

1. Dirígete a la página de **Pull Requests**.
2. Crea un nuevo PR para fusionar `develop` a `master`.
3. Asegúrate de que todos los cambios hayan sido revisados y aprobados por el equipo.
4. Cuando se haya aprobado, fusiona el PR. Este será el código que se desplegará en producción.

Recuerda que **`master` está protegida** y no puedes fusionar cambios directamente en ella sin pasar por el PR.

---

## Recomendaciones para Crear un Pull Request

| Paso   | Descripción                                                                                         |
|--------|-----------------------------------------------------------------------------------------------------|
| 1.     | Asegúrate de que tu PR esté basado en `develop` y no en `master`.                                     |
| 2.     | Añade un título claro y conciso que describa los cambios realizados.                                  |
| 3.     | Proporciona una descripción detallada de los cambios y el motivo de la modificación.                |
| 4.     | Realiza pruebas y asegúrate de que todo funcione correctamente antes de enviar el PR.              |
| 5.     | Revisa los conflictos antes de fusionar y resuélvelos adecuadamente.                                |
| 6.     | Solicita revisión de otros miembros del equipo antes de fusionar el PR.                             |3e

# Ejemplo de Pull Request

## Título:
**Implementación del sistema de login con autenticación**

## Descripción:
Este Pull Request introduce la funcionalidad de un sistema de login con autenticación para los usuarios. Los cambios realizados incluyen:

- Creación de una nueva interfaz de login.
- Integración con la base de datos para verificar las credenciales de usuario.
- Implementación de un sistema de manejo de sesiones.
- Adición de validaciones de entrada para asegurar que el usuario ingrese datos válidos.

### Archivos Modificados:
- `src/controllers/authController.js`
- `src/models/userModel.js`
- `src/views/loginView.html`
- `src/routes/authRoutes.js`

### Cómo Probar los Cambios:
1. Inicia la aplicación localmente.
2. Navega a la página de login (`/login`).
3. Intenta iniciar sesión con un usuario existente en la base de datos.
4. Verifica que el sistema redirija a la página de inicio después de un login exitoso.
5. Prueba ingresar credenciales incorrectas y asegúrate de recibir un mensaje de error.

### Checklist:
- [x] Se realizaron pruebas unitarias.
- [x] Se actualizó la documentación.
- [x] El código sigue las convenciones del proyecto.
- [ ] Los cambios fueron probados en un entorno de desarrollo.

## Comentarios:
Este PR está listo para ser revisado y fusionado en `develop`. Por favor, revisen los cambios y confirmen si todo está funcionando como se espera.