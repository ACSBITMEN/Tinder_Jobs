const Company = require('../Modelos/companyModel');

exports.getAllCompany = async (req, res) => {
    const company = await Company.find()
    return res.status(200).json(company)
};

exports.getOneCompany = async (req, res) => {
    const {id} = req.params;
    const company = await Company.findById(id)
    return res.status(200).json(company)
};

exports.createCompany = async (req, res) => {
    const newCompany = new Company ({...req.body})
    const insertedCompany = await newCompany.save()
    return res.status(201).json(insertedCompany)
};

exports.updateCompany = async (req, res) => {
    const {id} = req.params
    await Company.updateOne ({_id:id}, {...req.body})
    const updateCompany = await Company.findById(id)
    return res.status(200).json(updateCompany)
};

exports.deleteCompany = async (req, res) => {
    const {id} = req.params
    const CompanyToDelete = await Company.findByIdAndDelete(id)
    return res.status(202).json(CompanyToDelete)
};

exports.loginCompany = async (req, res) => {
    try {
      const { email, password } = req.body;
      const company = await Company.findOne({ email });
  
      if (!company) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      if (password !== company.password) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
      // res.status(200).redirect(`/companies/${company._id}`);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

