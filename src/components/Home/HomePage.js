import React from 'react'
import CreateTaskPage from './CreateTaskPage'
import TaskListPage from './TaskListPage'


// TODO: style each page to render on opposite sides

function HomePage() {
  return (
    <div>
      <CreateTaskPage />
      <TaskListPage />
    </div>
  )
}

export default HomePage
