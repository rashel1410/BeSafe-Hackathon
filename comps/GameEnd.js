import * as React from "react";
import { useContext, Component } from "react";
import { GameContext } from "../helpers/Contexts";
import { List } from "@mui/material";

const GameEnd = () => {
  return (
    <div className="gameEnd">
      <h1>כל הכבוד! עכשיו את יודעת איך לזהות מתחזה!</h1>
      <h2>לסיכום, ישנם מספר מאפיינים שמחשידים שפרופיל מסוים הוא של מתחזה:</h2>
      <List>
        <ul>הפרופיל לא מאומת (אין סימן וי)</ul>
        <ul>שגיאות כתיב בשם המשתמש</ul>
        <ul>תמונת פרופיל גנרית</ul>
        <ul>מעט חברים משותפים</ul>
        <ul>עוקב אחרי הרבה יותר אנשים מאשר שעוקבים אחריו</ul>
        <ul>נוצר לאחרונה </ul>
      </List>
    </div>
  );
};

export default GameEnd;
