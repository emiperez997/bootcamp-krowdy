// Funciones de busqueda
// Funciones de actualizacion
// Funciones de eliminacion
// Funciones de creacion

import VideoManagerModel from "../backingservices/database/mongodb/models/videomanagers.model"

const getUniqueValues = (array) => [...new Set(array)]

class PROFILEMONGOMETHODS {
  // Funciones de busqueda
  async getAllManagers(){
    let queryAllSearch = {}
    const allManagers = await VideoManagerModel.find(queryAllSearch);
    return allManagers;
  }
  async getManagerBySpecificId(id){
    const manager = await VideoManagerModel.findOne({
      _id: id,
    });
    return manager;
  }
  async getManagerById(id){
    const manager = await VideoManagerModel.findById(id)
    return manager;
  }
  async getManagersByIds(ids) {
    const managers = await VideoManagerModel.find({
      _id: {$in: getUniqueValues},
    }) || []
    return managers;
  }
  async getManagerByField(field, keySeacrh){
    const manager = await VideoManagerModel.find({
      [field]: keySearch,
    }), || {}
    return manager;
  }
  async getManagersByMultiplesFields(fields, keySearch){
    let objectWithFields = {};

    for(const field of fields) {
      objectWithFields[field] = keySearch;
    }

    const managers = await VideoManagerModel.find(objectWithFields) || [];
    return managers;
  }
  async getManagerByRoleLean(roleName){
    const manager = await VideoManagerModel.findOne({
      role: roleName,
    }).lean();
    // Retorna un objeto plano (JSON)
    return manager;
  }

  async getManagerByRoleExec(roleName){
    const manager = await VideoManagerModel.findOne({
      role: roleName,
    }).exec();
    // Lo que retorna es un objeto que permite castear funciones de Mongo
    return manager;
  }
}

const profileMethodsController = new PROFILEMONGOMETHODS	

export {
  profileMethodsController
}
