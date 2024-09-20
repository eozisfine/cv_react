import {Button} from "antd";

function ZButton (props){

    return <Button {...props} style={{
        borderWidth: 2,
        //borderColor: 'black',
        borderStyle: 'solid',
    }}>{props.children}</Button>

}
export default ZButton;