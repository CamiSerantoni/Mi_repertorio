import pool from "../config/db.js";
 const Post_Repertorio = async( repertorio ) => {
    let client
    const values = Object.values(repertorio);
    const consulta ={
    name: 'insert-Repertorio',
    text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *',
    values: values
}
try {
    client = await pool.connect();
    const result = await client.query(consulta);
    return result;
}catch (error) {
    return console.error('Error al insertar repertorio', error.code, error.stack, error.message);
}finally {
    if (client) {
        client.release();
    }
}
 }
export default Post_Repertorio;