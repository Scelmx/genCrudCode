import { Routes, Route } from "react-router-dom"
import { Component } from "../interface/pathToRoute";
import components from "../pages/index";

/** 路径转路由 */
function pathToRoute(path: string): string {
    return path.replace(/\[(.*?)\]/g, ':$1').replace(/^\.|\/Index.tsx?$/g, '')
}

function genRoute(route: Component = components) {
    return Object.entries(route).map(([path, Component]) => {
        return {
            path: pathToRoute(path),
            element: <Component />,
        }
    })
}

export const RootRoute = () => {
    const routes = genRoute(components)
    console.log(routes, 'ccc')
    return (<Routes>
        {routes.map((route, index) => <Route key={index} {...route} />)}
    </Routes>
    )
}