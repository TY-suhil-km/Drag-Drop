import './App.css';
import Canves from './components/New folder/canvas/Canves';
import Navbar from './components/New folder/navigation/Navbar';
import Sidebar from './components/New folder/sidebar/Sidebar';
import React, { useState } from 'react'

function App() {
  const [nodeObject, setNodeObject] = useState([])
  const [triggers] = useState(
    [
        {
            title: "New visitor",
            desc: "Triggers when somebody visites a specific page",
            icon:"far fa-eye"
        },
        {
            title: "Time as passed",
            desc: "triggers after a spicific amount of time",
            icon:"fas fa-clock"
        },
        {
            title: "Action is Performed",
            desc: "triggers when somebody performs a specified action",
            icon:"fas fa-bolt"
        },
        {
            title: "Error prompt",
            desc: "triggers when a spicified error happens",
            icon:"fas fa-exclamation-triangle"
        }
    ]
);
const [loggers] = useState(
  [{
    title: "Add new log entry",
    desc: "Triggers when somebody visites a specific page",
    icon:"fas fa-angle-right"
},
{
  title: "Update logs",
  desc: "edit and delete log entries in this project",
  icon:"fas fa-angle-right"
},
{
  title: "Prompt an error",
  desc: "triggers a spicific error",
  icon:"fas fa-exclamation-triangle"
}]
);

const [action] = useState([
{
  title:"New database entry",
  desc:"Adds a new entry to a specified database",
  icon:"fas fa-database"
},
{
  title:"Update Database",
  desc:"Edits and deletes database entries and properties",
  icon:"fas fa-database"
},
{
  title:"Perform an action",
  desc:"Performs or edits a specified action",
  icon:"fas fa-bolt"
},
{
  title:"Make a tweet",
  desc:"Makes a tweet with a specified query",
  icon:"fab fa-twitter"
},
])

  return (
    <div className="App">
      <Navbar/>
      <Sidebar triggers={triggers} loggers={loggers} action={action}/>
     <Canves triggers={triggers}  loggers={loggers} action={action} setNodeObject={setNodeObject} nodeObject={nodeObject}/>
    </div>
  );
}

export default App;
