import styles from "./AppName.module.css";

const AppName = () => {
  const heading = "Calcualtor";

  return (
    <>
      <span>
        <h1 className={styles.appName}>{heading}</h1>
      </span>
    </>
  );
};
export default AppName;
