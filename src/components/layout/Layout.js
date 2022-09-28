import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      {/* <MainNavigation className={classes.nav} /> */}

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
