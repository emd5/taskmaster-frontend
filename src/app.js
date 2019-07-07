import React, {useState, useEffect} from 'react';
import './app.scss';

import mockData from './mock.json';

const API = 'http://taskmaster-app-dev.us-west-2.elasticbeanstalk.com/tasks';

function Task(){

    const [task, setTasks] = useState( [] );

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const _getTasks = () => {
         setTasks(mockData)
        // fetch from api
        fetch( proxyurl + API)
        .then( data => data.json() )
        .then( allTasks => setTasks(allTasks) )
        .catch( console.error);
      };

    useEffect(_getTasks, []);

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
    <div>
        <header> Taskmaster </header>
        <main>
            <Task />
        </main>
        <footer> &copy; 2019 Liz Mahoney</footer>
    </div>
  );
}

export default App;
