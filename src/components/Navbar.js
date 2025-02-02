import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/browse-books" style={styles.navLink}>Browse Books</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/add-book" style={styles.navLink}>Add Book</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#282c34",
    padding: "10px 20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: "18px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    transition: "background-color 0.3s",
  },
};

export default Navbar;
