import { Fragment } from "react";
import { Footer } from "./Footer";

export function Layout(props: any) {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">{props.children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
