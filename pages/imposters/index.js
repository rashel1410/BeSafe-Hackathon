import ShowList from "../../comps/ShowList";
import Search from "../../comps/Search";
import { useGlobalContext } from "../../public/context";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Imposters = () => {
  const { imposters, isPending } = useGlobalContext();
  const [alignment, setAlignment] = React.useState("all");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <center>
        <div>
          <h1>רשימת המתחזים</h1>
          <Search />
          <br></br>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="all">הכל</ToggleButton>
            <ToggleButton value="facebook">פייסבוק</ToggleButton>
            <ToggleButton value="instagram">אינסטגרם</ToggleButton>
          </ToggleButtonGroup>

          {isPending && <div>טוען...</div>}
          {console.log(alignment == "all")}
          {alignment == "all" && imposters && (
            <ShowList imposters={imposters} isPending={isPending} />
          )}
          {alignment == "facebook" && imposters && (
            <ShowList
              imposters={imposters.filter(
                (imposter) => imposter.source == "facebook"
              )}
              isPending={isPending}
            />
          )}
          {alignment == "instagram" && imposters && (
            <ShowList
              imposters={imposters.filter(
                (imposter) => imposter.source == "instagram"
              )}
              isPending={isPending}
            />
          )}
        </div>
    </center>
  );
};

export default Imposters;
