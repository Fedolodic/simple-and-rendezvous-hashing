# simple-and-rendezvous-hashing
Simple hashing function and more complex rendezvous hashing strategy examples.

What the rendezvous hashing strategy does is for every username, client, it's going to calculate a ranking of the 
servers (or the PATHs), and choose the highest ranking server to associate itself with. If a server is removed that
is mapped to a client, then the client will choose the second highest ranking server.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/12787345/98710250-05b0f500-2349-11eb-8baf-f00a0cf44fb4.gif)
