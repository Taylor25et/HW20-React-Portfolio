import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

export default function Resume() {
  const styles = {
    largeIcon: {
      width: 60,
      height: 60,
    },
    // list: {
    //   textAlign: "left",
    // },
  };
  return (
    <section className="container">
      <h1 className="top-title">Resume</h1>
      <hr></hr>
      <div>
        <div className="mt-5">
          <h2 className="top-title">Taylor Thompon</h2>
          <ul>
            <li>Email: taylor25et@gmail.com</li>
          </ul>
          <IconButton
            component="a"
            href="https://github.com/Taylor25et"
            aria-label="My GitHub Page"
          >
            <GitHubIcon style={styles.largeIcon} />View my GitHub
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/taylor-thompson-545073197"
            aria-label="My LinkedIn Page"
          >
            <LinkedInIcon style={styles.largeIcon} />View my Linked in
          </IconButton>
          <IconButton
            component="a"
            href="https://docs.google.com/document/d/1m2fAXdY5F4NJlIx-xmr_2Ya04ypjBr80/edit?usp=sharing&ouid=104548712702009630910&rtpof=true&sd=true"
            aria-label="My Resume"
          >
            <ChromeReaderModeIcon style={styles.largeIcon} />View my Resume
          </IconButton>
        </div>
      </div>
    </section>
  );
}
