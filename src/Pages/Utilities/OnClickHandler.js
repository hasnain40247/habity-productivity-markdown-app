import { CustomEditor } from "./RenderElements";

export function OnClickHandler(event,icon,editor){
    console.log(editor.selection)
    switch(icon){
        case 'bold':{
            event.preventDefault()
    CustomEditor.toggleBoldMark(editor)
break

        }
        case 'italic':{
            event.preventDefault()
    CustomEditor.toggleItalicMark(editor)
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