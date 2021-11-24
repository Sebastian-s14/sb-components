/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
        * Message to show
    */
    label: string;
    /**
        * size button
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
        * All caps?
    */
    allCaps?: boolean;
    /**
        * color
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
        * font color
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
