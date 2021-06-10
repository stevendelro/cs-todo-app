import React from 'react'
import CreateTaskDrawer from './CreateTaskDrawer'
import TaskListDisplay from './TaskListDisplay'


// TODO: style each page to render on opposite sides

function HomePage() {
  return (
    <div>
      <CreateTaskDrawer />
      <TaskListDisplay />
    </div>
  )
}

export default HomePage
