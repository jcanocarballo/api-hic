const fs = require("fs");
const path = require("path");
let _categoryService = null;

class CategoryController {
    constructor({ CategoryService }) {
        _categoryService = CategoryService;
    }

    async get(req, res) {
        const { categoryId } = req.params;
        const category = await _categoryService.get(categoryId);
        return res.send(category);
    }

    async create(req, res){
      const { body } = req;
      const createdCategory = await _categoryService.create(body);
      return res.status(201).send(createdCategory);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const category = await _categoryService.getAll(pageSize, pageNum);
        return res.send(category);
    }

    async update(req, res) {
        const { body } = req;
        const { categoryId } = req.params;
        const updateCategory = await _categoryService.update(categoryId, body);

        return res.send(updateCategory);
    }

    async delete(req, res) {
        const { categoryId } = req.params;
        const deleteCategory = await _categoryService.delete(categoryId);
        return res.send(deleteCategory);
    }
}

module.exports = CategoryController;