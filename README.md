> # step-by-step
> 
>     * [x]  open **vsCode**
> 
>     * [x]  open **terminal** `ctrl+~`
>       
>       * [x]  check if **git bash** is default (`ctrl+shift+p` to open **cmd pallete**: "select default..." choose "git bash"
> 
>     * [x]  navigate to your workspace, e.g.: `cd Desktop`
> 
>     * [x]  make your **project root diretory**: `mkdir folder`
> 
>     * [x]  navigate to the new dir/: `cd folder`
> 
>     * [x]  open up the **project root** in **vsCode**: use the gui...wish I knew the cmd,
>       it's something like: `open -a 'visual studio code' folder`
> 
>     * [x]  initialize a **Node.js** project: `$:` `npm init -y`
> 
>     * [x]  install **express.js**: `$:` `install i express --save`
> 
>     * [x]  create a new file `$:` `touch index.js`
> 
>     * [x]  open `index.js` in **vsCode**
>       
>       * [ ]  create an express server (see the **git repo** for the `source code`)
> 
>     * [x]  edit `package.json`:
> 
> 
> ```diff
> ...
> "scripts": {
> -        "test": "echo \"Error: no test specified\" && exit 1"
> +        "test": "echo \"Error: no test specified\" && exit 1",
> +       "start": "node index.js"
>     },
> 
> ...
> ```
> 
>     * [x]  create a `.gitignore` file: `$:` `echo 'node_modules' >> .gitignore` (`//I think that'll do it, could be wrong`)
> 
>     * [x]  initialize the **local git repo**: `$: ` `git init`
> 
>     * [x]  head over to https://github.com
>       
>       * [x]  sign in (requires an active account)
>       * [x]  create a new repo: name it something like: `hello-heroku` or `node-on-heroku` or `whatever`
>       * [x]  do **not** check any defaults, just give it a name and create it.
> 
>     * [x]  follow the steps on the next screen to connect this **remote repo** to your **local git repo**
>       
>       * [x]  they give you something like this:
> 
> 
> ```
> echo "# hello-heroku-or-whatever-you-named-it" >> README.md
> git init
> git add README.md
> git commit -m "first commit"
> git branch -M main
> git remote add origin https://github.com/{YOUR-USER-NAME}/{YOUR-REPO-NAME}.git
> git push -u origin main
> ```
> 
> 
> ```diff
> echo "# hello-heroku-or-whatever-you-named-it" >> README.md
> - git init //we already did this
> - git add README.md
> + git add . 
> ``
> 
> ```
> git commit -m "first commit"
> git branch -M main
> git remote add origin https://github.com/{YOUR-USER-NAME}/{YOUR-REPO-NAME}.git
> git push -u origin main
> ```


