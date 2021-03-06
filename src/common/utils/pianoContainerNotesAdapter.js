import { Note as tonalNote } from "@tonaljs/modules";
import { TWELVE_TONE_NOTES } from "../consts/twelveToneConsts";
import isBlackKey from "./isBlackKey";
import matchAccidentals from "./matchAccidentals";

// pads and cleans up notes
export default (notes, rootNote) => {
    if (!notes || !rootNote) {
        return []
    }

    const allNotes = [...TWELVE_TONE_NOTES];
    // mutates all notes
    matchAccidentals(allNotes, notes)

    const tempNotes = [...allNotes, ...allNotes, ...allNotes]
    // make the root the first note    
    const rootIndex = tempNotes.indexOf(rootNote);
    const notesFromRoot = tempNotes.slice(
        rootIndex,
        rootIndex + 12,
    )
    const padLeft = isBlackKey(notesFromRoot[0]) ? [tempNotes[rootIndex - 1] + " "] : [];
    const padRight = isBlackKey(notesFromRoot[11]) ? [tempNotes[rootIndex + 13] + " "] : [];
    const pianoNotes = [
        ...padLeft,
        ...notesFromRoot,
        ...padRight
    ]

    return pianoNotes
}