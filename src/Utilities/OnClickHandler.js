import { CustomEditor } from "../../Utilities/Helpers/CustomEditor";

export function OnClickHandler(event,icon,editor){
    console.log("SELECTION")
    console.log(editor.selection)
    switch(icon){
        case 'bold':{
            event.preventDefault()
    CustomEditor.toggleMark(editor,"bold")
break

        }
        case 'italic':{
            event.preventDefault()
    CustomEditor.toggleMark(editor,"italic")
break

        }
        case 'code':{
            event.preventDefault()
    CustomEditor.toggleCodeBlock(editor)
break

        }
        case 'list':{
            event.preventDefault()
    CustomEditor.toggleListBlock(editor)
break

        }

        case 'underline':{
            event.preventDefault()
    CustomEditor.toggleUnderLineBlock(editor)
break

        }
    }

    return null
}