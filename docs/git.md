# 📝 Guía de Git: Comandos Principales

Esta guía cubre los comandos más comunes de Git, sus explicaciones y ejemplos de uso. Puedes utilizarla como referencia para gestionar tus repositorios de manera eficiente.

| **Comando**                             | **Descripción**                                                                                         | **Ejemplo**                                                       |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| `git init`                              | Inicializa un nuevo repositorio Git en el directorio actual.                                              | `git init`                                                        |
| `git clone <url>`                       | Clona un repositorio remoto a tu máquina local.                                                          | `git clone https://github.com/usuario/repo.git`                    |
| `git status`                            | Muestra el estado actual del repositorio, incluyendo los archivos modificados y los no rastreados.      | `git status`                                                      |
| `git add <archivo>`                     | Agrega un archivo al área de preparación para ser committeado.                                           | `git add index.js`                                                |
| `git add .`                             | Agrega todos los archivos modificados al área de preparación.                                           | `git add .`                                                       |
| `git commit -m "<mensaje>"`             | Crea un nuevo commit con los archivos añadidos al área de preparación, con un mensaje descriptivo.       | `git commit -m "Añadir nuevas funcionalidades"`                    |
| `git log`                               | Muestra el historial de commits del repositorio.                                                         | `git log`                                                         |
| `git log --oneline`                     | Muestra el historial de commits en una sola línea por commit.                                           | `git log --oneline`                                               |
| `git branch`                            | Muestra las ramas locales del repositorio.                                                               | `git branch`                                                      |
| `git branch <nombre-rama>`              | Crea una nueva rama con el nombre especificado.                                                           | `git branch nueva-rama`                                           |
| `git checkout <nombre-rama>`            | Cambia a la rama especificada.                                                                            | `git checkout nueva-rama`                                         |
| `git checkout -b <nombre-rama>`         | Crea y cambia a una nueva rama.                                                                           | `git checkout -b nueva-rama`                                      |
| `git merge <nombre-rama>`               | Fusiona la rama especificada con la rama actual.                                                         | `git merge nueva-rama`                                            |
| `git pull`                              | Obtiene y fusiona los cambios del repositorio remoto a la rama actual.                                   | `git pull origin main`                                            |
| `git push`                              | Envía los cambios locales al repositorio remoto.                                                         | `git push origin main`                                            |
| `git push -u origin <nombre-rama>`      | Establece la rama remota como upstream para la rama local especificada.                                  | `git push -u origin nueva-rama`                                   |
| `git remote add origin <url>`           | Agrega un repositorio remoto con el nombre `origin` y la URL especificada.                               | `git remote add origin https://github.com/usuario/repo.git`        |
| `git fetch`                             | Descarga los cambios del repositorio remoto sin fusionarlos.                                             | `git fetch origin`                                                |
| `git reset --hard <commit-id>`          | Resetea el repositorio a un commit específico, eliminando los cambios no confirmados.                    | `git reset --hard abc123`                                         |
| `git reset <archivo>`                   | Elimina un archivo del área de preparación, sin eliminarlo de los cambios locales.                       | `git reset index.js`                                              |
| `git diff`                              | Muestra las diferencias entre el estado actual y el último commit.                                       | `git diff`                                                        |
| `git stash`                             | Guarda los cambios actuales de manera temporal para poder trabajar en otra cosa.                        | `git stash`                                                       |
| `git stash pop`                         | Recupera los cambios guardados en el stash y los aplica en el estado actual.                             | `git stash pop`                                                   |

---

## 💡 Consejos Útiles:

- **`git status`** siempre es útil para ver el estado del repositorio y qué cambios aún no han sido comprometidos.
- Utiliza **`git log --oneline`** para ver un historial limpio y conciso de los commits.
- **`git stash`** es muy útil si necesitas cambiar rápidamente de rama y no quieres perder los cambios sin confirmar.

Esta guía cubre los comandos más esenciales, pero Git tiene muchos otros comandos que puedes explorar según sea necesario. ¡Espero que te ayude en tu flujo de trabajo con Git!  