# 🧠 EXAMEN: Servidor - API REST en PHP

## 🗂️ Contexto
Esta parte del examen corresponde al **lado servidor (backend)** de la tienda online.  
El servidor se encargará de **proporcionar datos JSON** a las peticiones que lleguen desde el cliente (HTML + JS).

---

## 🎯 Objetivos
- Comprender el funcionamiento de una API REST sencilla.
- Devolver información en formato **JSON**.
- Simular una base de datos estática usando arrays en PHP.
- Implementar filtros y respuestas dinámicas mediante **parámetros GET**.

---

## 🧩 Estructura del servidor

servidor/
└── api.php


---

## 📄 Descripción de `api.php`
El archivo `api.php` actúa como punto central de la API REST.  
Su función es devolver un **listado de productos** o **un producto específico** si se envía un parámetro `id`.

### Ejemplo de uso
- `GET http://localhost/tienda-online/servidor/api.php` → devuelve todos los productos.
- `GET http://localhost/tienda-online/servidor/api.php?id=2` → devuelve el producto con ID 2.

---

## 🧪 Ejercicios propuestos

### 🔹 Ejercicio 1: Añadir nuevos campos al JSON (`img` y `categoria`)
- Agrega dos nuevos campos al JSON de productos:
  - `img`: contendrá la URL de una imagen representativa del producto.
  - `categoria`: identificará a qué tipo de producto pertenece (por ejemplo: “ropa”, “calzado”, “accesorios”…).
- Para el campo `img`, puedes utilizar imágenes de prueba obtenidas de Google o del sitio [https://via.placeholder.com](https://via.placeholder.com).

📍 *Objetivo:* ampliar la estructura de datos de la API para incluir nueva información que el cliente pueda mostrar en su interfaz.

---

### 🔹 Ejercicio 2: Añadir nuevos productos al JSON
- Amplía el array `$productos` para que contenga **al menos 6 productos nuevos** además de los existentes.
- Asegúrate de incluir para cada uno los campos:
  - `id`
  - `nombre`
  - `descripcion`
  - `precio`
  - `img`
  - `categoria`

📍 *Objetivo:* comprender cómo se estructuran los datos en una API REST y cómo se amplía su contenido.

---

### 🔹 Ejercicio 3: Recorrer un JSON y mostrarlo por terminal o navegador
- Este ejercicio tiene como objetivo comprobar que sabes **leer y recorrer datos JSON en PHP** utilizando `foreach`.

**Instrucciones:**
1. Crea o modifica una función llamada `mostrarProductosJSON()` en el archivo `api.php`.
2. Dentro de la función:
   - Carga el array `$productos` con `json_encode()`.
   - Convierte ese JSON de nuevo a un array asociativo con `json_decode()`.
   - Recorre el array resultante con `foreach` y muestra los nombres y precios de cada producto en formato texto (no JSON).

**Prueba desde navegador:**
http://localhost/ra1clienteservidorexmamen/servidor/api.php?modo=texto

**Ejemplo de salida esperada:**

--- Lista de productos ---

Camiseta básica - 12.99 €

Pantalón vaquero - 29.95 €

Zapatillas deportivas - 45.50 €


📍 *Objetivo:* practicar la manipulación de estructuras JSON y el uso de `foreach` en PHP.

---

### 🔹 Ejercicio 4: Filtrado de productos por parámetro GET (`max`)
- Modifica el código de `api.php` para que, si el usuario pasa un parámetro `max` (por ejemplo `?max=30`), la API devuelva **solo los productos cuyo precio sea menor o igual a ese valor**.

**Ejemplo de uso:**
GET http://localhost/ra1clienteservidorexmamen/servidor/api.php?max=30


**Ejemplo de código sugerido:**
```php
$productosFiltrados = array_filter($productos, fn($p) => $p['precio'] <= $max);

Objetivo: aplicar filtros dinámicos a una respuesta JSON mediante parámetros GET y funciones anónimas (fn).

---

## 🧩 Recomendaciones
- No es necesario conectar a una base de datos real, solo trabajar con arrays.
- Comprueba que el archivo devuelva siempre un JSON válido (`jsonlint.com` puede ayudarte).
