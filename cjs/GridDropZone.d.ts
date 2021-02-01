import * as React from "react";
export interface GridDropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
    boxesPerRow: number;
    rowHeight: number;
    id: string;
    children: React.ReactNodeArray;
    disableDrag?: boolean;
    disableDrop?: boolean;
    style?: React.CSSProperties;
    onDragStart?(): void;
    onDragEnd?(): void;
}
export declare function GridDropZone({ id, boxesPerRow, children, style, disableDrag, disableDrop, rowHeight, onDragStart, onDragEnd, ...other }: GridDropZoneProps): JSX.Element;
