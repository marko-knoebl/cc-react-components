import "./Checkbox.css"

export default function Checkbox({isChecked, onPress}) {
    return <input type="checkbox" checked={isChecked} onClick={()=>onPress(isChecked)}/>
}