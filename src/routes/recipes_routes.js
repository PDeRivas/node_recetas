import { Router } from "express";


import { getRecipes, findRecipe, postRecipe } from "../controllers/recipes_controllers.js";

const router = Router()

router.get('/receta', getRecipes)
router.get('/receta/:id', findRecipe)

router.post('/receta', postRecipe)

export default router
