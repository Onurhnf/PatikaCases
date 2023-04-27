import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function BookCard({ volumeInfo, setBookDetailLink, setOpen, selfLink }) {
  function handleModalOpen(link) {
    setOpen(true);
    setBookDetailLink(link);
  }
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 300,
        boxShadow: "0px 2px 15px 5px black",
        margin: 5,
      }}
    >
      <CardMedia
        component="img"
        alt={volumeInfo?.title}
        height="260"
        width="180"
        sx={{
          position: "relative",
          margin: "5px auto",
          maxWidth: "180px",
          border: "2px solid rgb(238,238,238)",
          boxShadow: "0px 2px 10px 2px black",
        }}
        image={volumeInfo?.imageLinks?.thumbnail}
      />

      <CardActions>
        <Stack direction={"row"} width={"100%"} justifyContent="center">
          <Button size="small">
            <Link
              target="_blank"
              underline="none"
              href={volumeInfo?.previewLink}
            >
              Preview
            </Link>
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "20px", alignSelf: "center" }}
          />
          <Button size="small" onClick={() => handleModalOpen(selfLink)}>
            Detail
          </Button>
        </Stack>
      </CardActions>
      <CardContent>
        <Grid
          container
          item
          direction={"column"}
          width={"100%"}
          alignItems={"center"}
          gap={0.5}
        >
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ width: "60px", alignSelf: "center" }}
          />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {volumeInfo?.title}
          </Typography>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ width: "60px", alignSelf: "center" }}
          />
          <Typography variant="body2" color="text.secondary">
            {volumeInfo?.authors?.[0]}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default BookCard;
