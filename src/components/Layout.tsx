import { Fragment } from "react";
import { Footer } from "./Footer";

export function Layout(props: any) {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column ">{props.children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
