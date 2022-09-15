import { createContext, useState, useEffect } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [manv, setManv] = useState("")
  // const [feedbackEdit, setFeedbackEdit] = useState({
  //   item: {},
  //   edit: false,
  // })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = () => {
    // setManv(localStorage.getItem("manv"))
    // console.log("useEffect manv", manv)
    let storage_manv = JSON.parse(localStorage.getItem("manv"))
    // console.log("storage manv", storage_manv)
    // console.log("feedbackdata", FeedbackData.filter((item) => { return item.rating === storage_manv.text }))

    if (storage_manv) {
      console.log("context storage_manv", storage_manv)
      setFeedback(FeedbackData.filter((item) => { return item.rating === storage_manv.text }))
      setManv(storage_manv)
      // setFeedback(FeedbackData)
    } else {void(0)}
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    
    {newFeedback.text === "" ? void(0) : localStorage.setItem("manv", JSON.stringify(newFeedback))}
    {newFeedback.text === "" ? void(0) : setManv(newFeedback)}
    console.log("manv in context", newFeedback.text)
    setFeedback(FeedbackData.filter((item) => { return item.rating === newFeedback.text }))
    // console.log("feedback context is", feedback)
    // feedback.map((i) => console.log(i))
    // console.log("feedback is", feedback)
    console.log("filter feedback add localstorage")

  }

  // Delete feedback
  const deleteFeedback = () => {
    // if (window.confirm('Are you sure you want to delete?')) {
    // }
    window.localStorage.removeItem('manv')
    setManv(localStorage.getItem("manv"))
    setFeedback(FeedbackData)
    console.log("deleted localstorage and setFeedback")
  }

  // Update feedback item
  // const updateFeedback = (id, updItem) => {
  //   setFeedback(
  //     feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
  //   )
    
  // }

  // Set item to be updated
  // const editFeedback = (item) => {
  //   setFeedbackEdit({
  //     item,
  //     edit: true,
  //   })
  // }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        manv,
        // feedbackEdit,
        deleteFeedback,
        addFeedback,
        fetchFeedback,
        // editFeedback,
        // updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
