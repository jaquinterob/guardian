# 🚀 Instalación y Configuración de NestJS + Postman  

Este documento proporciona una guía detallada para instalar **NestJS** y configurar **Postman** para probar la API.  

---

## 📌 1. Instalación y Configuración de Postman  

### 🔹 1.1 Descargar e Instalar Postman  
1. Ir a la página oficial de descarga:  
   [Descargar Postman](https://www.postman.com/downloads/)  
2. Instalar Postman en el sistema operativo correspondiente.  
3. Abrir Postman y crear una cuenta (opcional).  

### 🔹 1.2 Crear una Petición GET de Prueba  
1. En Postman, crear una **nueva colección** para organizar las peticiones.  
2. Crear una **nueva petición**:  
   - Seleccionar el método **GET**.  
   - Escribir la URL: `http://localhost:3000/`.  
3. Hacer clic en **"Send"** para probar la respuesta (si NestJS está corriendo, debe responder `"Hello World!"`).  

---

## 📌 2. Verificar Instalación de Node.js y npm  

### 🔹 2.1 Verificar si Node.js y npm están Instalados  
Ejecutar los siguientes comandos en la terminal:  

```
node -v   # Verificar versión de Node.js
npm -v    # Verificar versión de npm
```

Si no están instalados, descargar **Node.js** desde [aquí](https://nodejs.org).  

---

## 📌 3. Instalación de NestJS CLI  

### 🔹 3.1 Instalar NestJS CLI Globalmente  
Ejecutar en la terminal:  

```
npm install -g @nestjs/cli
```

### 🔹 3.2 Verificar que la Instalación fue Exitosa  
```
nest --version
```

---

## 📌 4. Crear un Proyecto NestJS  

### 🔹 4.1 Crear un Nuevo Proyecto  
```
nest new nombre-del-proyecto
```
> Reemplaza `nombre-del-proyecto` con el nombre deseado.  

### 🔹 4.2 Entrar en la Carpeta del Proyecto  
```
cd nombre-del-proyecto
```

### 🔹 4.3 Instalar Dependencias  
```
npm install
```

### 🔹 4.4 Iniciar el Servidor en Modo Desarrollo  
```
npm run start:dev
```

### 🔹 4.5 Verificar que NestJS está Corriendo  
Abrir un navegador o Postman y acceder a:  
```
http://localhost:3000/
```

Si todo está bien, debe responder:  
```
"Hello World!"
```

---

## 📌 5. Configurar Postman para Probar la API  

### 🔹 5.1 Crear una Nueva Petición GET en Postman  
1. Abrir Postman y hacer clic en **"New Request"**.  
2. Seleccionar **GET** y escribir la URL:  
   ```
   http://localhost:3000/
   ```
3. Hacer clic en **"Send"** y verificar la respuesta.  

### 🔹 5.2 Crear un Nuevo Controlador en NestJS  
Ejecutar en la terminal:  
```
nest generate controller test
```

### 🔹 5.3 Modificar el Controlador para Agregar una Nueva Ruta  
Abrir el archivo `src/test/test.controller.ts` y modificarlo:  

```
import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('saludo')
  getSaludo(): string {
    return 'Hola desde NestJS';
  }
}
```

### 🔹 5.4 Probar la Nueva Ruta en Postman  
1. En Postman, crear una nueva petición **GET** con la siguiente URL:  
   ```
   http://localhost:3000/test/saludo
   ```
2. Hacer clic en **"Send"**.  
3. La respuesta debe ser:  
   ```
   "Hola desde NestJS"
   ```

---

## 📌 6. Configuración Opcional en VS Code  

### 🔹 6.1 Instalar VS Code  
Descargar [VS Code](https://code.visualstudio.com/) si aún no está instalado.  

### 🔹 6.2 Instalar Extensiones Recomendadas  
Para mejorar la experiencia con NestJS, instalar en VS Code:  
- **ESLint** (para revisar el código).  
- **NestJS Snippets** (para autocompletar código).  

---

## 📌 7. Conclusión  
Con esta guía, puedes instalar y configurar **NestJS** correctamente y realizar pruebas con **Postman**.  

Si tienes dudas o errores, verifica cada paso y revisa la consola para obtener más información.  