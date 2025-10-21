



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de Datos Local en JavaScript</title>
</head>
<body>
    <p>Revisa la consola (Ctrl+Shift+I o F12) para ver la simulación de la base de datos.</p>
    <script>
        // La clave que usaremos para guardar nuestros datos en localStorage
        const DB_KEY = 'productos_db';

        // Estructura de datos por defecto (si no hay nada guardado)
        const initialData = [
            { id: 1, nombre: 'Laptop Gamer', precio: 1200, categoria: 'Tecnología' },
            { id: 2, nombre: 'Smartphone Pro', precio: 800, categoria: 'Tecnología' },
            { id: 3, nombre: 'Mesa de Oficina', precio: 150, categoria: 'Muebles' }
        ];

        /**
         * Carga los datos desde localStorage o usa los datos iniciales si no existen.
         * @returns {Array<Object>} El array de productos.
         */
        function loadData() {
            try {
                const dataString = localStorage.getItem(DB_KEY);
                return dataString ? JSON.parse(dataString) : initialData;
            } catch (error) {
                console.error("Error al cargar los datos desde localStorage:", error);
                return initialData;
            }
        }

        /**
         * Guarda los datos en localStorage.
         * @param {Array<Object>} dataToSave - El array de productos a guardar.
         */
        function saveData(dataToSave) {
            try {
                const dataString = JSON.stringify(dataToSave);
                localStorage.setItem(DB_KEY, dataString);
                console.log("Datos guardados con éxito en localStorage.");
            } catch (error) {
                console.error("Error al guardar los datos en localStorage:", error);
            }
        }

        /**
         * Crea un nuevo producto y lo añade a la base de datos.
         * @param {Object} newItem - El nuevo objeto de producto.
         */
        function createProduct(newItem) {
            const products = loadData();
            // Asigna un ID único, por ejemplo, el ID más alto + 1
            const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
            newItem.id = newId;
            products.push(newItem);
            saveData(products);
            console.log("Producto creado:", newItem);
        }

        /**
         * Lee todos los productos de la base de datos.
         * @returns {Array<Object>} El array de todos los productos.
         */
        function readProducts() {
            return loadData();
        }

        /**
         * Actualiza un producto existente por su ID.
         * @param {number} id - El ID del producto a actualizar.
         * @param {Object} updatedFields - Los campos a modificar.
         */
        function updateProduct(id, updatedFields) {
            let products = loadData();
            const index = products.findIndex(p => p.id === id);
            if (index !== -1) {
                products[index] = { ...products[index], ...updatedFields };
                saveData(products);
                console.log(`Producto con ID ${id} actualizado.`, products[index]);
            } else {
                console.error(`Error: No se encontró un producto con ID ${id}.`);
            }
        }

        /**
         * Borra un producto por su ID.
         * @param {number} id - El ID del producto a borrar.
         */
        function deleteProduct(id) {
            let products = loadData();
            const initialLength = products.length;
            products = products.filter(p => p.id !== id);
            if (products.length < initialLength) {
                saveData(products);
                console.log(`Producto con ID ${id} eliminado.`);
            } else {
                console.error(`Error: No se encontró un producto con ID ${id} para borrar.`);
            }
        }

        // --- Ejemplo de Uso ---
        console.log("--- BASE DE DATOS LOCAL ---");

        // 1. Cargar datos iniciales
        let currentProducts = readProducts();
        console.log("Estado inicial:", currentProducts);

        // 2. Crear un nuevo producto
        createProduct({ nombre: 'Auriculares Inalámbricos', precio: 50, categoria: 'Audio' });
        console.log("Después de crear:", readProducts());

        // 3. Actualizar un producto existente (el de ID 1)
        updateProduct(1, { precio: 1150 });
        console.log("Después de actualizar:", readProducts());

        // 4. Borrar un producto (el de ID 2)
        deleteProduct(2);
        console.log("Después de borrar:", readProducts());

        // Para ver el estado final, actualiza la página y revisa la consola
    </script>
</body>
</html>
