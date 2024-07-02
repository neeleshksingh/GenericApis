const express = require('express');
const { getAll, getById, add, updateById, deleteById } = require('../utils/crudUtils');

const userRoutes = (Model, routeName) => {
    const router = express.Router();

    router.use(express.json());
    router.use(express.urlencoded({ extended: true }));

    router.get(`/${routeName}/GetAll`, getAll(Model));
    router.get(`/${routeName}/GetById/:id`, getById(Model));
    router.post(`/${routeName}/Add`, add(Model));
    router.put(`/${routeName}/UpdateById/:id`, updateById(Model));
    router.delete(`/${routeName}/DeleteByIntId/:id`, deleteById(Model));

    return router;
};

module.exports = userRoutes;