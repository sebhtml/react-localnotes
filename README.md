# react-localnotes
React version of the localnotes project.

Deploy with Docker
------------------

```
$ mkdir react-localnotes.build
$ cd react-localnotes.build
$ docker build -t localnotes-node ../react-localnotes/app/
$ docker create --name node-server-4 -P localnotes-node
$ docker start node-server-4
$ docker port node-server-4
```
