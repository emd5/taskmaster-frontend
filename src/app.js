import React, {useState, useEffect} from 'react';
import './app.scss';

import mockData from './mock.json';

const API = 'http://taskmaster-app-dev.us-west-2.elasticbeanstalk.com/tasks';
//const API = 'http://localhost:5000/tasks';

function Task(){

    const [task, setTasks] = useState( [] );

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const _getTasks = () => {
         setTasks(mockData)
        // fetch from api
        fetch( `${proxyurl}${API}` )
        .then( data => data.json() )
        .then( allTasks => setTasks(allTasks) )
        .catch( console.error);
      };

     const _toggleStatus = (e) => {
        e.preventDefault();
        let id = e.target.id;

        fetch(`${proxyurl}${API}/${id}/state`, {
            mode: 'cors',
            method: 'PUT'
        })
        .then( data => data.json() )
        .then( singleTask => {
            setTasks( task.map( (entry) => {
                return entry.id === id ? singleTask : entry;
                }
            ));
        })
        .catch( console.error );
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
                {oneTask.imageUrl ? (<img src={oneTask.imageUrl} height="100px" width="100px"/>
                                    ) : (<p>No Image</p>)}
                {oneTask.thumbnailImageUrl ? (<img class="thumbnail" src={oneTask.thumbnailImageUrl}/>
                                           ) : (<p>No Image</p>)}


                  <p>{oneTask.title} | Assignee: {oneTask.assignee}</p>
                  <p>Status: <span id={oneTask.id} onClick={_toggleStatus}>{oneTask.status.toString()}</span>
                  </p>
                  <form action={`${API}/${oneTask.id}/images`} method="post" encType="multipart/form-data">
                      <label>
                        <span>Upload Image</span>
                        <input name="file" type="file" />
                      </label>
                      <button>Save</button>
                   </form>

                </summary>
                <Description description={oneTask.description} />
              </details>
            </li>
          )}
         </ul>
   </>
    )
}

function Description(props){
    let description = props.description || [];
    return (

        <section>
            <>
                <p>Description: <span>{description}</span></p>

            </>

        </section>



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
