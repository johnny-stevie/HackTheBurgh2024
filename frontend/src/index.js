import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import RtlLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { store } from "store/loginStore";
import { Provider } from "react-redux";
import { AuthenticatorMiddleware } from "middleware/AuthenticatedMiddleware";
import { AlreadyAuthenticated } from "middleware/AlreadyAuthenticated";
import {Dashboard as AdminLayout} from "layouts/admin/index";
import { SignIn as AuthLayout } from "views/auth/signIn";
import { useAppSelector } from "store/hooks";


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              
              <Route path={`/auth`} component={AuthLayout} />
              <Route path={`/admin`} component={
              // <AuthenticatorMiddleware>
                // AuthenticatorMiddleware
                
                  AdminLayout
                  
              //</AuthenticatorMiddleware>
              }/>
              <Route path={`/rtl`} component={RtlLayout} />
              <Redirect from="/" to="/admin" />
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
