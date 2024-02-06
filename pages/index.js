import Head from "next/head";
import Link from "next/link.js";
import styles from "../styles/Home.module.css";
import Card from "../comps/Card.js";
import Grid from "../comps/Grid.js";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useGlobalContext } from "../public/context.js";
import CreateImposterDialog from "./create.js";

export default function Home() {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleClickOpen = () => {
    setAddDialogOpen(true);
  };

  const handleClose = () => {
    setAddDialogOpen(false);
  };

  return (
    <>
      <Head>
        <title>Shazar | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <Grid>
        <Card title="אינסטגרם" searchBar />
        <Card title="פייסבוק" searchBar />
        <Card
          title="על האתר"
          content={
            <p>
              האם אי פעם קיבלת בקשת חברות או הודעה מפרופיל שנראה לך חשוד?
              <br></br>
              האם עלה בך הרצון לבדוק האם זהו פרופיל של מתחזה?<br></br>
              באתר שלנו – SHA-ZAR - תוכלי לעשות זאת בקלות!<br></br>
              מצד שמאל, תוכלי לחפש פרופיל מפייסבוק או אינסטגרם.<br></br>
              כמו כן, באפשרותך לדווח על פרופיל מזויף באמצעות כפתור ה + למטה.
              <br></br>
              לא בטוחה למה לשים לב לפני הדיווח?<br></br>
              לחצי על המשחק "איך מזהים מתחזה" מצד שמאל, בו תלמדי על המאפיינים
              העיקריים.
            </p>
          }
          avatarList="True"
        ></Card>
        <Card title="איך מזהים מתחזה" />
        <Fab aria-label="add" size="large">
          <AddIcon onClick={handleClickOpen} />
        </Fab>
        <CreateImposterDialog
          open={addDialogOpen}
          onClose={handleClose}
          onAddSuccess={showSnackbar}
        />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
}
