import * as React from "react";
import Button, { ButtonProps, ButtonTypes } from "components/Button/index.view";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuRounded from "@material-ui/icons/MenuRounded";

import { makeStyles } from "@material-ui/core";
import "./Navbar.scss";

interface NavbarProps {
  title: string;
  buttonProps: ButtonProps[];
}

const Navbar: React.FC<NavbarProps> = ({ title, buttonProps }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    buttonWrapper: {
      margin: "calc(10% + var(--lage-spacer)) 0 0 auto",
      color: "var(--froly)",
      "@media (max-width: 42.5em)": {
        margin: "0 0 0 auto",
      },
    },
  });

  return (
    <div className="Navbar">
      <div className="Navbar__title">{title}</div>
      <div className="Navbar__buttonContainer">
        {buttonProps
          .filter((entry) => entry.type === ButtonTypes.PRIMARY)
          .map((entry) => (
            <Button key={entry.label} className="Navbar__button" {...entry} />
          ))}
      </div>

      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        classes={{ root: useStyles().buttonWrapper }}
        onClick={handleClick}
      >
        <MenuRounded fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <div className="Navbar__menuItems--secondary">
          {buttonProps
            .filter((entry) => entry.type === ButtonTypes.SECONDARY)
            .map((entry) => (
              <MenuItem key={entry.label}>
                <a
                  className="Navbar__link"
                  href={entry.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.text}
                </a>
              </MenuItem>
            ))}
        </div>
        <div className="Navbar__menuItems--primary">
          {buttonProps.map((entry) => (
            <MenuItem key={entry.label}>
              <a
                className="Navbar__link"
                href={entry.link}
                target="_blank"
                rel="noreferrer"
              >
                {entry.text}
              </a>
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
