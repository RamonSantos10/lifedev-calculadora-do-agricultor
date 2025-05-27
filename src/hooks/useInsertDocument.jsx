import { useState, useEffect, useReducer, use } from "react";
import {db} from '../firebase/config.jsx'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "INSERTED_DOC":
            return { loading: true, error: null }
        case "ERROR":
            return { loading: true, error: action.payload }
        default:
            return state
    }
}

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispath = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelBeforeDispath({ type: "LOADING" })
        try {

            const newDocument = { ...document, createAt: Timestamp.now() }
            const insertDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCancelBeforeDispath({
                type: "INSERTED_DOC",
                payload: insertDocument
            })
        } catch (error) {

            checkCancelBeforeDispath({ type: "ERROR", payload: error.message })

        }
    }

    useEffect(() => {
        return () => setCancelled(true)

    }, [])

    return { insertDocument, response }
}