import { ReactElement } from "react";

export interface ReactTypicalProps {
    steps: Array<string | number>;
    wrapper?: string;
    loop?: number;
    className?: string;
}

export default function Typical(props: ReactTypicalProps): ReactElement;
