import { Component } from "../interface/pathToRoute";

const component: Component = import.meta.glob('./app/**/*.tsx', {
    eager: true,
    import: 'default',
})

export default component;