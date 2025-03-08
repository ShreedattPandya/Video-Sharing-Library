import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h6" color="white" ml={1} fontWeight="bold">
        Watch
      </Typography>
      <Typography variant="h5" color="red" ml={1} fontWeight="bold">
        Verse
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;