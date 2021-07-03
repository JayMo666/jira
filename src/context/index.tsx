import React, { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "store/index";
import { Provider } from "react-redux";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    </Provider>
  );
};
