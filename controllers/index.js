const { Laptop } = require('../database/models'); // Ajusta la ruta si tu modelo está en otra carpeta


const createLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.create(req.body);
    res.status(201).json(laptop);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la laptop.' });
  }
};


const getAllLaptops = async (req, res) => {
    console.log('Obteniendo laptops...');
    try {
        const laptops = await Laptop.findAll();
        return res.status(200).json({ laptops });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send(error.message);
    }
};


const updateLaptop = async (req, res) => {
    const { id } = req.params;  // Obtener el id de los parámetros de la URL
    const { body } = req; // Obtener los datos enviados en el body de la solicitud
  
    try {
      // Buscar la laptop por ID
      const laptop = await Laptop.findByPk(id);
  
      if (!laptop) {
        return res.status(404).json({ error: 'Laptop no encontrada.' });
      }
  
      // Actualizar los atributos de la laptop
      await laptop.update(body);
      await laptop.reload();
  
      // Enviar respuesta con la laptop actualizada
      res.status(200).json(laptop);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la laptop.' });
    }
  };
  
const deleteLaptop = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Laptop.destroy({ where: { id } });

    if (deleted) {
      res.status(200).json({ message: 'Laptop eliminada.' });
    } else {
      res.status(404).json({ error: 'Laptop no encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la laptop.' });
  }
};

const getLaptopById = async (req, res) => {
    try {
      const { id } = req.params;
      const laptop = await Laptop.findByPk(id);
  
      if (!laptop) {
        return res.status(404).json({ error: 'Laptop no encontrada.' });
      }
  
      res.status(200).json(laptop);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la laptop.' });
    }
  };

module.exports = {
  createLaptop,
  getAllLaptops,
  updateLaptop,
  deleteLaptop,
  getLaptopById,
};
