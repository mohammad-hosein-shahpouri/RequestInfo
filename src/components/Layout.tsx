import { FC, Fragment } from "react";
import { JsxElement } from "typescript";

export function Layout(props: any) {
  return (
    <Fragment>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </Fragment>
  );
}
