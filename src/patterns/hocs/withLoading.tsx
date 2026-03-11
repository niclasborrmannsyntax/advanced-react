import React from "react";

function withLoading(Component: React.ComponentType<any>) {
  return ({ isLoading, ...props }: { isLoading: boolean } & any) => {
    if (isLoading) {
      return (
        <div className="bg-white/20 rounded-2xl p-4 text-center font-bold max-w-sm">
          Lädt...
        </div>
      );
    }
    return <Component {...props} />;
  };
}

export default withLoading;
