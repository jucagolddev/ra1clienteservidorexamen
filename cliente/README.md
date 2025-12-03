# 🧠 EXAMEN: Cliente - Tienda Online

## 🗂️ Contexto
Esta parte del examen corresponde al desarrollo **del lado cliente (frontend)** de una aplicación web que se comunica con un servidor mediante una **API REST en PHP**.  
El cliente está desarrollado con **HTML, JavaScript y Bootstrap**, y su objetivo es **mostrar los datos del servidor de forma dinámica** y permitir la interacción del usuario.

---

## 🎯 Objetivos
- Comprender la estructura de una arquitectura cliente-servidor.
- Usar `fetch()` para obtener datos de una API REST.
- Manipular el **DOM** con JavaScript para mostrar información.
- Aplicar diseño **responsive** con Bootstrap.
- Gestionar el carrito de compra usando **localStorage**.

---

## 🧩 Estructura del cliente

cliente/
├── index.html
├── productos.html
├── producto.html
├── carrito.html
└── js/
├── api.js
├── productos.js
├── producto.js
└── carrito.js


---
## 🧪 Ejercicios propuestos

### 🔹 Ejercicio 1: Cambiar el estilo de las tarjetas de productos
- En el archivo `productos.js`, modifica mediante **JavaScript** el estilo visual de las tarjetas (`card`) que muestran los productos.  
- Puedes cambiar el **color de fondo**, el **tamaño de la fuente** o cualquier otro aspecto visual, pero debe apreciarse un cambio visible.  
- Los elementos que debes modificar son:
  - `.card`
  - `.card-title`
  - `.card-text`

📍 *Objetivo:* comprobar que dominas la manipulación del DOM desde JavaScript.

---

### 🔹 Ejercicio 2: Mejorar la interfaz de productos
- Mejora la interfaz visual de `productos.html` para que, además de los datos ya mostrados, aparezcan **la imagen y la categoría** de cada producto.  
- Es necesario realizar previamente el ejercicio del **servidor** correspondiente:  
  **“Ejercicio 1: Añadir nuevos campos al JSON (img y categoría)”**.
- Utiliza componentes de **Bootstrap** para mantener un diseño atractivo y ordenado.

📍 *Objetivo:* mostrar datos adicionales de la API en el frontend y aplicar estilos coherentes.

---

### 🔹 Ejercicio 3: Mostrar solo tres productos en la página de inicio
- Modifica `index.html` para crear un contenedor que muestre únicamente **tres productos** disponibles.  
- Cada producto debe visualizarse en una **tarjeta de Bootstrap** con su imagen, nombre y precio.
- Crea un nuevo archivo `index.js` donde copiarás la función de carga de productos (basada en `productos.js`) y usa un **contador** o un `break` para limitar la visualización a tres elementos.

📍 *Pista:*  
Puedes reutilizar la función `obtenerProductos()` y añadir una condición que corte el bucle tras mostrar tres productos.

📍 *Objetivo:* practicar la reutilización de código y el control de bucles en el renderizado dinámico.

---

### 🔹 Ejercicio 4: Mostrar cantidad de productos en el carrito
- En `carrito.html`, existe un texto “Carrito ()”.  
  Modifica el código de `carrito.js` para que, al cargar la página, se actualice automáticamente el número de productos entre paréntesis.  
  Por ejemplo:
  - Si hay tres productos: `Carrito (3)`
  - Si no hay ninguno: `Carrito (0)`
- Utiliza `document.getElementById()` o un método equivalente del DOM para actualizar el texto.


---

## 🧩 Recomendaciones
- Mantén las funciones en archivos JS separados según su finalidad.
- Usa la consola del navegador (`F12`) para depurar errores.
- Asegúrate de que las rutas (`API_URL`) sean correctas para tu entorno local.
