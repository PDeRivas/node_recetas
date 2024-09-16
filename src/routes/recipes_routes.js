import { Router } from "express";


import { getRecipes, findRecipe, postRecipe, deleteRecipe } from "../controllers/recipes_controllers.js";

const router = Router()

router.get('/receta', getRecipes)
router.get('/receta/:id', findRecipe)

router.post('/receta', postRecipe)

router.delete('/receta/:id', deleteRecipe)
export default router
