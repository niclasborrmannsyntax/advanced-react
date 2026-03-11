import React from "react";

function withLogging(Component: React.ComponentType<any>) {
  return ({ ...props }: any) => {
    console.log("Component rendered with props:", props);
    return <Component {...props} />;
  };
}

export default withLogging;
