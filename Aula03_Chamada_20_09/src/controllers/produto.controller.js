
import { validationResult } from 'express-validator'
import Produto from '../models/produto.model.js'

export default class ProdutoController {
  static async index(req, res) {
    const produtos = await Produto.findMany()
    res.json(produtos)
  }

  static async create(req, res) {
    const erros = validationResult(req)
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() })
    }
    const produto = await Produto.create({
      data: req.body
    })
    res.json(produto)
  }

  static async show(req, res) {
    const erros = validationResult(req)
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() })
    }
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" })
    }
    res.json(produto)
  }

  static async update(req, res) {
    const erros = validationResult(req)
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() })
    }

    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" })
    }
    const updatedProduto = await Produto.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedProduto)
  }

  static async delete(req, res) {
    const erros = validationResult(req)
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() })
    }
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" })
    }
    await produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Produto deletado com sucesso' })
  }
}