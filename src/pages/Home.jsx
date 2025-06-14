import DocumentTitle from "../components/DocumentTitle";

const styles = {
  container: {
    minHeight: "calc(98vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle>Home • Contact Book</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to Contact Book{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
