import Delete_Cancion from "../models/Delete_Cancion.js";
import Get_Repertorios from "../models/Get_Repertorios.js";
import Post_Repertorio from "../models/Post_Repertorio.js";
export const postRepertorio = async (req, res) => {
    try {
        const postData = req.body;
        const insertData= await Post_Repertorio( postData);
       res.status(200).json({estado:'OK', insert: insertData.rows});
    } catch (error) {
        res.status(500).json({ error: "Error al crear el repertorio" });
    }
}

export const getCanciones = async (req, res) => {
    try {
        const getData = await Get_Repertorios();
        res.status(200).json({result: getData.rows});
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el repertorio" });
    }
}

export const deleteCancion = async (req, res) => {
    /* try {
        const { id } = req.params;
        const deleteData = await Delete_Cancion(id);
        res.status(200).json({result: deleteData.rows});
    } catch (error) {
        res.status(500).json({ error: "Error al borrar la cancion" });
    } */
}

export const putCancion = async (req, res) => {
try {
    
} catch (error) {
    
}


}
