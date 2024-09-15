import db from '../db.js'

export const getRecipes = (req, res) => {
    db.query('SELECT * FROM recetas', (err, results) =>{
        if (err){
            return res.status(500).json({error: 'Error en la consulta'})
        }
        res.json(results)
    })
}

export const findRecipe = (req, res) => {
    const id = req.params.id
    db.query(`SELECT * FROM recetas WHERE id=${id}`, (err, results) => {
        if (err){
            return res.status(500).json({error: 'Error en la consulta', tipo: err})
        }
        res.json(results)
    })
}

export const postRecipe = (req, res) => {
    const {nombre, ingredientes, pasos} = req.body
    
    if (!nombre || !ingredientes || !pasos){
        return res.status(400).json({error: 'Falta algún Campo'})
    }

    const query = 'INSERT INTO recetas (nombre, ingredientes, pasos) VALUES (?, ?, ?)'
    db.query(query, [nombre, ingredientes, pasos], (err, results) =>{
        if (err){
            console.error('Error al ingresar en la base de datos', err)
            return res.status(500).json({error: 'Error al ingresar a la base de datos'})
        }
        res.status(201).json({message:'Agregado exitosamente a la base de datos', recetaId: results.insertId})
    })
}

