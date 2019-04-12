*Run project `npm start`
A.New project
    1.Config nodejs project with babel 
        - `npm init`
        - `npm install --save-dev nodemon`
        - `npm install @babel/core @babel/node --save-dev`
        - `npm install @babel/preset-env --save-dev`
    2.Add to package.jon tag `script`
        `"start": "nodemon --exec babel-node server.js",`
    3.Create new file `.babelrc` and add this
        `{"presets": ["@babel/preset-env"]}`
    4.Run project with nodemon
        `npm start`

B.Add dotenv to make .env file
    1.Run
        `npm install dotenv --save`
    2.Make new file .env with example structure
        `MY_SECRET = mypassword`
    3.Add this code from start file
        `import 'dotenv/config';`
    4.Using
        `process.env.MY_SECRET`




