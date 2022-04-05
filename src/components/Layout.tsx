import { Fragment } from "react";
import { Footer } from "./Footer";

export function Layout(props: any) {
  return (
    <Fragment>
      <div className="container">
        <div className="flex content-center items-center flex-col ">{props.children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
