const mongoose = require('mongoose');
const Company = require('../Modelos/companyModel');
const Dev = require('../Modelos/devModel');

exports.getCompanyMatch = async (req, res) => {
    try {
        const {id} = req.params;
        const company = await Company.findById(id);
        
        const devs = await Dev.find({
            rol: company.ofertas_empleo[0].rol,
            experiencia:company.ofertas_empleo[0].experiencia,
            habilidades: {$all:company.ofertas_empleo[0].habilidades},
            pais: company.ofertas_empleo[0].pais,
            ciudad: company.ofertas_empleo[0].ciudad
        });

        const nameCompany = company.nombres

        const match = {nameCompany, devs};

        return res.status(200).json (match);

        } catch (error) {
            console.error('Error al obtener datos de la base de datos:', error);
        } finally {
            mongoose.connection.close();
        }
}

exports.getDevsMatch = async (req, res) => {
    try {
        const {id} = req.params;
        const dev = await Dev.findById(id);
        
        const companies = await Company.find({
            'ofertas_empleo': {
                $elemMatch: {
                rol: dev.rol,
                habilidades:{$all:dev.habilidades},
                experiencia:dev.experiencia,
                pais:dev.pais,
                ciudad:dev.ciudad
                }
            }
        });

        const match = {dev, companies};

        return res.status(200).json (match);

        } catch (error) {
            console.error('Error al obtener datos de la base de datos:', error);
        }
}