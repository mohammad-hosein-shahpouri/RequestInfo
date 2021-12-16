import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, version } from "react";

export function Footer() {
  const now = new Date();
  return (
    <Fragment>
      <footer className=" d-flex flex-column flex-md-row justify-content-between py-1 px-1 px-md-4">
        <span className="text-center d-block">
          © {now.getUTCFullYear()} - Mohammad Hosein Shahpouri
        </span>

        <p className="d-flex flex-row align-items-center justify-content-center text-center mb-0">
          <span className="">Made with</span>
          <FontAwesomeIcon icon="heart" className="text-danger mx-1" />        
          <span className="">and</span>          
          <FontAwesomeIcon icon="coffee" className="text-light mx-1" /> 
        </p>
      </footer>
      <p className=" text-center mb-0">
          <FontAwesomeIcon icon={["fab","react"]} className="mx-1 mt-1 text-info" /> 
          <span className=" text-info">{version}</span>         
      </p>
    </Fragment>
  );
}
