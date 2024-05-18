import pool from "../config/db.js";

const Put_Cancion = async (cancion) => { 
console.log("Salida de cancion: ",cancion)
let client

const values = Object.values(cancion)
console.log("Salida de values: ",values)
const consulta = {
    text: "UPDATE canciones SET titulo = $2, artista = $3, tono = $4 WHERE id = $1 returning *",
    values
}
try {
    client = await pool.connect();
    const result = await client.query(consulta);
    return result.rows
} catch (error) {
    return console.error('Error al editar repertorio', error.stack);
} finally {
    if (client) {
        client.release();
    }
}
}


export default Put_Cancion
