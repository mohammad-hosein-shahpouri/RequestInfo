import { faGithub, faGithubAlt, faGithubSquare, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, version } from "react";
import { BmacButton } from "./BmacButton";

export function Footer() {
  const now = new Date();
  return (
    <Fragment>

      <BmacButton />

      <footer className=" ">
        <div className="flex flex-col md:flex-row justify-between py-1 px-1 md:px-4">
          <span className="text-center block">
            © {now.getUTCFullYear()} - Mohammad Hosein Shahpouri
          </span>

          <p className="flex flex-row items-center justify-center text-center mb-0">
            <span>Made with</span>
            <FontAwesomeIcon icon={faHeart} className="text-danger mx-1" />
            <span>and</span>
            <FontAwesomeIcon icon={faCoffee} className="mx-1 text-warning" />
          </p>
        </div>

        <div className="text-center mb-0 text-2xl">
          <a href="https://github.com/mohammad-hosein-shahpouri" target={"_blank"}>
            <FontAwesomeIcon icon={faGithubSquare} className="mx-1 mt-1" />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-hosein-shahpouri/" target={"_blank"}>
            <FontAwesomeIcon icon={faLinkedin} className="mx-1 mt-1 " />
          </a>
        </div>

        <p className="text-center text-base bg-info text-light mb-0">
          <FontAwesomeIcon icon={faReact} className="mx-1 mt-1" />
          <span >{version}</span>
        </p>
      </footer>
    </Fragment>
  );
}
