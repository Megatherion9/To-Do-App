## To-Do console commands application

This app save tasks or lists of things in a .json file.
Also you can add, edit, delete and show tasks.

Instructions:
First you have to install the Node.js packages:

```
npm install
```


#### Commands to manage the app:

Add tasks:
```
node app crear -d "task description"
```

Mark tasks as completed:
```
node app actualizar -d "task description" -c true
```

Delete tasks:
```
node app borrar -d "task description"
```

Show all tasks (done and undone):
```
node app listar
```

Show only done tasks:
```
node app listar -c true
```

Show only undone tasks:
```
node app listar -c false
```
