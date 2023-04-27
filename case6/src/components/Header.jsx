import { AppBar, Button, Stack, TextField, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";

function Header({ setBooks }) {
  const [searchText, setSearchText] = useState();

  async function fetchData() {
    try {
      const results = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchText}&printType=books&orderBy=newest&maxResults=39`
      );

      setBooks(results.data.items);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AppBar position="static">
      <Toolbar style={{ height: "15vh", background: "whitesmoke" }}>
        {
          <>
            <Stack direction="row" width="100%" justifyContent="center" gap={1}>
              <TextField
                color="info"
                onChange={(e) => setSearchText(e.target.value)}
                focused
                label="Search"
              />
              <Button
                sx={{ borderWidth: "3px" }}
                size="small"
                variant="outlined"
                aria-label="search"
                color="primary"
                onClick={fetchData}
              >
                <SearchIcon />
              </Button>
            </Stack>
          </>
        }
      </Toolbar>
    </AppBar>
  );
}

export default Header;
