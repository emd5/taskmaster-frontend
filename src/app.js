import React, {useState, useEffect} from 'react';
import './app.scss';

import mockData from './mock.json';
console.log(mockData);

const API = 'http://taskmaster-app.us-west-2.elasticbeanstalk.com/tasks';

function Task(){
    const [task, setTask] = useState( [] );
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const _getTask = () => {
        fetch( proxyurl + API)
        .then(data => data.json() )
        .then( task => setTask(task) )
        .catch( console.error );
    }

    useEffect(_getTask, []);

    return(
    <>
        <div>All Task</div>

        <ul>
          { task.map( (oneTask) =>
            <li key={oneTask.id}>
              <details>
                <summary>
                  <p>{oneTask.title}</p>
                  <p>{oneTask.description}</p>

                </summary>
              </details>
            </li>
          )}
         </ul>
   </>
    )
}

function App() {
  return (
    <div className="App">
        <header> Taskmaster </header>
        <main>
            <Task />
        </main>
        <footer> &copy; 2019 Liz Mahoney</footer>
    </div>
  );
}

export default App;
