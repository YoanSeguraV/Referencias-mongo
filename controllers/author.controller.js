import Author from "../models/Author.js";


export const ListAuthor = async (req, res) => {
    try {
      const author =  await Author.find();
      
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json("error en el servidor");
    }
  };

  export const authorid = async (req, res) => {
    try {
        const{id}=req.params
      const author = await Author.findById({_id:id});
      
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json("error en el servidor");
    }
  };

  export const deleteAuthor = async (req, res) => {
    try {
      const { id } = req.params;
  
      const autorFound = await Author.findByIdAndDelete({_id:id});
      console.log(autorFound)
  
      res.json("eliminado correctamente");
    } catch (error) {
      res.status(500).json("error en el servidor");
    }
  };


export const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    author.save();
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json("error en el servidor");
  }
};
