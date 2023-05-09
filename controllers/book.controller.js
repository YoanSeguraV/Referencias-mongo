import Book from "../models/Book.js";
import Author from "../models/Author.js";

export const ListBook = async (req, res) => {
  try {
    const book = await Book.find().populate("author");
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json("error en el servidor");
  }
};

export const bookid = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById({ _id:id });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json("error en el servidor");
  }
};

// export const createBook = async (req, res) => {
//   try {
//     const { titulo, paginas, author} = req.body;

//     const autorFound = await Author.find({ nombre: { $in: author }});

//     const bookModel = new Book(req.body);
//     bookModel.author = autorFound.map((author)=> author._id);

//     await bookModel.save()

//     res.json("ok")

//   } catch (error) {
//     res.status(500).json("error en el servidor");
//   }
// };

export const createBook = async (req, res) => {
  try {
    const { titulo, paginas, author } = req.body;

    const autorFound = await Author.findOne({ nombre: { $in: author } });
    const bookModel = new Book(req.body);
    bookModel.author = autorFound._id;

    await bookModel.save();

    res.json("ok");
  } catch (error) {
    res.status(500).json("error en el servidor");
  }
};

export const updateBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, paginas } = req.body;

    if (titulo || paginas) {
      await Book.findByIdAndUpdate(id, req.body);

      res.json("actualizado correctamente");
    } else {
      res.json("porfavor complete el campo");
    }
  } catch (error) {
    res.status(500).json("error en el servidor");
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const autorFound = await Book.findByIdAndDelete({_id:id});
    console.log(autorFound)

    res.json("eliminado correctamente");
  } catch (error) {
    res.status(500).json("error en el servidor");
  }
};
