import nodeType from "./nodeType";
import getIconType from "./getIconType";
import renderNode from "./renderNode";
const conditionalStyle = (condition, style) => (condition ? style : {});
import color from 'color';


export {
    nodeType,
    getIconType,
    renderNode,
    conditionalStyle,
    color
}