import React, {useState, useEffect} from 'react';
import './app.scss';

import mockData from './mock.json';
console.log(mockData);

const allTasksAPI = 'http://taskmaster-app.us-west-2.elasticbeanstalk.com/tasks';

function Task(){

    const [task , setTasks] = useState([]);

    const _getTasks = () => {
        {/*setTasks(mockData);*/}
        fetch( allTasksAPI, {
            mode:'cors',
            method: 'GET',
        })
        .then( data => data.json() )
        .then( task => setTasks(task) )
//        .catch( console.error );
    };

    useEffect(_getTasks, []);

    return(
        <>
            <div>All Task</div>
            <div>
            <ul>
                  { task.map( (oneTask) =>
                    <li key={oneTask.id}>
                      <details>
                        <summary>
                          <span>{oneTask.title}</span>
                          <span>{oneTask.description}</span>

                        </summary>
                        {/*<Description description={oneTask.description} />*/}
                      </details>
                    </li>
                  )}
                </ul>
             </div>
         </>
    )
}

{/*function Description(props){
let description = props.description || [];
    return(
        <section>
            {description.map( (item, idx) =>
                <div>
                    <span>{item.}
                </div>
            )}
        </section>
    )

}*/}



function App() {
  return (
    <>
        <header>Taskmaster</header>
        <main>
          {/* <Description />*/}
        <Task />
        </main>
        <footer> &copy; 2019 Liz Mahoney</footer>
    </>
  );
}

export default App;
