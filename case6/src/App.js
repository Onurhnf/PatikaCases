import Header from "./components/Header.jsx";
import BookCard from "./components/Card.jsx";
import BookModal from "./components/Modal.jsx";
import { useState } from "react";
import { Grid } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const [books, setBooks] = useState([]);
  const [bookDetailLink, setBookDetailLink] = useState("");

  return (
    <>
      <Header setBooks={setBooks} />

      <Grid container item direction={"row"} gap={2} justifyContent={"center"}>
        {Array.isArray(books) &&
          books.length > 0 &&
          books.map((book) => {
            return (
              <BookCard
                key={book.id}
                {...book}
                setBookDetailLink={setBookDetailLink}
                setOpen={setOpen}
              />
            );
          })}
      </Grid>
      <BookModal
        open={open}
        bookDetailLink={bookDetailLink}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}

export default App;
