import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <button>Home</button>
      <button>About</button>
      <button>Proyects</button>
      <button>Contact</button>
    </div>
  );
};

export default NavBar;
