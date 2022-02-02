import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"; // <-- New code
import Home from "./pages/Home/Home";

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: Home },
    // {
    //     path: "/app",
    //     key: "APP",
    //     component: RenderRoutes,
    //     routes: [
    //         {
    //             path: "/app",
    //             key: "APP_ROOT",
    //             exact: true,
    //             component: () => <h1>App Index</h1>,
    //         },
    //         {
    //             path: "/app/page",
    //             key: "APP_PAGE",
    //             exact: true,
    //             component: () => <h1>App Page</h1>,
    //         },
    //     ],
    // },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component background={route.background} changeBackground={route.changeBackground} {...props} routes={route.routes} />}
        />
    );
}

export function RenderRoutes({ routes, background, changeBackground }) {
    const [background2, setBackground] = useState(background)

    useEffect(() => {
        changeBackground(background2)
    }, [background2])

    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes background={background2} changeBackground = {setBackground} key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}