const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

// Ruta de bienvenida
router.get('/', (req, res) => res.send('Bienvenido a la API de Laptops. Usa /api/laptops para obtener los datos.'));

// Rutas para laptops
router.post('/laptops', controllers.createLaptop);    // Crear una laptop
router.get('/laptops', controllers.getAllLaptops);     // Obtener todas las laptops
router.put('/laptops/:id', controllers.updateLaptop);  // Actualizar una laptop (por ID)
router.delete('/laptops/:id', controllers.deleteLaptop); // Eliminar una laptop (por ID)
router.get('/laptops/:id', controllers.getLaptopById);


module.exports = router;
