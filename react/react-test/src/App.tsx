import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RelationDiff, { Relation } from './RelationDiff'

function App() {
  const relation1: Relation = {
    source: "SALUT",
    details: "Un details",
    end_date: "27/10/87",
    start_date: "26/10/87"
  }

  const relation2: Relation = {
    source: "SALUT",
    details: "Un details un peu plus détaillé",
    end_date: "27/10/87",
    start_date: "26/11/87"
  }

  
  return (
    <RelationDiff initialValues={relation1} newValues={relation2}></RelationDiff>
  )
}

export default App
