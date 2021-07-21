import React from "react";
import styles from "./AboutComponent.module.css";
import globalStyles from "../../../src/assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

function AboutComponent() {
  
    return (
      <div className="" id={styles.about}>
        <div className={cx(globalStyles.row, globalStyles["h-100"])}>
          <div
            className={cx(
              globalStyles.col,
              globalStyles["h-100"],
              globalStyles["p-5"],
              globalStyles["col-md-6"]
            )}
            id={styles.about_text}
          >
            <h2 className={globalStyles["text-light"]}>About Us</h2>
            <p className={globalStyles["text-light"]}>
              We are a diverse group, spread out along the East Coast of the US.
              We are all enrolled in the Nucamp Full Stack Bootcamp. We have
              decided to take on the task of creating a camping E-Commerce website
              using React. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in hendrerit turpis. Sed in metus condimentum metus ultricies pellentesque. Maecenas tempus, nisl convallis finibus rutrum, metus arcu gravida nulla, eu luctus libero dui ac risus. Curabitur imperdiet dolor non bibendum tincidunt. Curabitur porttitor purus at velit elementum, id luctus est porttitor. Nunc ut ex nec risus volutpat euismod. Cras blandit condimentum tellus feugiat bibendum. Nullam bibendum commodo metus.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutComponent;
