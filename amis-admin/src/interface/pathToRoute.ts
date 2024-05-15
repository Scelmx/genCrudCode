import { FC } from "react";

export interface Component {
    [key: string]: () => JSX.Element
}