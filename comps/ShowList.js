import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../public/context";
import Link from "next/link";
import styles from '/styles/Card.module.css';
import Card from '/comps/Card.js';

export default function ShowList({ imposters, isPending }) {
  return (
    <center>
        <div style={{"width": "1000px"}}>
          <Card content={imposters.map((imposter) => (
             <div style={{ "margin-bottom": "10px" ,"width": "600px","height":"150px"}}>
            <Card content = {(
              
            <Link href={`profileDisplay/${imposter.id}`} key={imposter.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={imposter.img_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      {imposter.first_name} {imposter.last_name}
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                       דווח בתאריך {imposter.timestamp} 
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Link>
            )}></Card>
            </div>
          ))}


        ></Card>
        </div>
      </center>
   
  );
}
