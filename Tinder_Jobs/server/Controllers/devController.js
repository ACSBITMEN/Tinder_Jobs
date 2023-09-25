const Dev = require('../Modelos/devModel')

exports.getAllDevs = async (req, res) => {
    const devs = await Dev.find()
    return res.status(200).json(devs)
};

exports.getOneDev = async (req, res) => {
    const {id} = req.params;
    const devs = await Dev.findById(id)
    return res.status(200).json(devs)
};

exports.createDev = async (req, res) => {
    const newDev = new Dev ({...req.body})
    const insertedDev = await newDev.save()
    return res.status(201).json(insertedDev)
};

exports.updateDev = async (req, res) => {
    const {id} = req.params
    await Dev.updateOne ({_id:id}, {...req.body})
    const updateDev = await Dev.findById(id)
    return res.status(200).json(updateDev)
};

exports.deleteDev = async (req, res) => {
    const {id} = req.params
    const DevToDelete = await Dev.findByIdAndDelete(id)
    return res.status(202).json(DevToDelete)
};

exports.loginDev = async (req, res) => {
    try {
      const { email, password } = req.body;
      const dev = await Dev.findOne({ email });
  
      if (!dev) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      if (password !== dev.password) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      res.status(200).json({ message: 'Inicio de sesión exitoso', id: dev._id});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

