# Taskmaster 

This React application interacts with the Taskmaster backend using Spring.

## Author

Liz Mahoney

## Deployed Link

Frontend - https://master.d1abu7pwsmv6f1.amplifyapp.com/

Backend - http://taskmaster-app-dev.us-west-2.elasticbeanstalk.com/tasks

Taskmaster Backend Github Repo - https://github.com/emd5/taskmaster

Lambda Function Resize Repo - https://github.com/emd5/lambdaresize


## Getting started 

- Go to aws S3 console and create a bucket `taskmaster-frontend`.

- On your local, go to command line and run `create-react-app taskmaster-frontend`, this will create a folder with a new react application and all of its contents.

- Open IDE and change the `App.js` to `app.js`, `App.css` to `app.css` and `App.test.js` to `app.test.js`
- Go to `index.js` and change import to `./app

- Go to .gitignore and add any files/directories to the file

- Run `npm i node-sass`

***Run the application***
`npm start`

***Create a production build***
`npm run build`

***Deploy static files to s3***
`npm run deploy`

# Features
***7/10/19***
- [x] Resize image and have it display next to original image

## Resources 
Set up Lambda - https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html

