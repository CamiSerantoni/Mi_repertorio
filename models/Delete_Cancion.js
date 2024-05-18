import pool from "../config/db.js";
const Delete_Cancion = async (id) => {
  
let client
try {
    client = await pool.connect();
    const result = await client.query('DELETE FROM canciones WHERE id = $1', [id]);
    return result
} catch (error) {
    return console.error('Error al eliminar repertorio', error.stack);
} finally {
    if (client) {
        client.release();
}

    
}
}

export default Delete_Cancion