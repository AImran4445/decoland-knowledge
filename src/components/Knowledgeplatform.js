import React from 'react'
import KnowledgeNavbar from './KnowledgeNavbar'
import KnowledgeplatformDiscover from './KnowledgeplatformDiscover'
import './knowledgeplatform.css'

function Knowledgeplatform() {
  return (
    <>
    <KnowledgeNavbar />
    <div className='discover-content'>
      <KnowledgeplatformDiscover/>
    </div>
    </>
  )
}

export default Knowledgeplatform