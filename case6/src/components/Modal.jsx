import { Box, Divider, Modal, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function BookModal({ open, handleClose, bookDetailLink }) {
  const [bookDetail, setBookDetail] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await axios.get(bookDetailLink);

        setBookDetail(results.data.volumeInfo);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [bookDetailLink]);

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        setBookDetail("");
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
          variant="body1"
        >
          {
            bookDetail?.description?.replace(
              /<[^>]*>/g,
              ""
            ) /**this regex for avoiding html tags inside the description */
          }
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ width: "60px", alignSelf: "center", my: 2 }}
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <b>{bookDetail?.title} </b>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b> {bookDetail?.publisher}</b>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b> {bookDetail?.publishedDate}</b>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>
            {bookDetail.pageCount
              ? `${bookDetail.pageCount}`.concat(" pages")
              : ""}
          </b>
        </Typography>
      </Box>
    </Modal>
  );
}

export default BookModal;
