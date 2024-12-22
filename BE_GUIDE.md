NOdejs

BE:
what is BE and server and how can i categorize

1.) Frontend.2.) Backend 3.) Database

when you hit a www.google.com a dns lookup happens and a ip address for a server is returned and then the client hit this ip address to get the webpage.

what is the server?

client =====request==>>> --------<<<response----server ===>>> Database

1.) client asks for a HTLML page and server response with HTML page.

2.) client ask for a json data and server fetched this data from databse and manipulates this data and returns the client.

Server gets the request
server responsds to a request
server connect tpo a database

Server is very prowerful machine.
On a server you would run backend language like
1.) jav1, python, node, ruby, go, c#, PHP

This backend language proive you with a way to connect to databse .

Scenario:
you need to serve 100 users.
And 1 machine can serve 32 users.
So may server we need?
ANSWER: 4 SERVERS.

we can increase/decrease the number of servers based on the user count

#### --- CDN

Content delivery network.

Cloudfront
Akamai
cloudfare

User => google.com => server for scalar would be hit => html returned

server for google is in U.S.A

CDN tell you that we have placed our server across the globe and they call it edge servers.

JS, CSS, images could keep these in our server.

CDN - can serve these assets and the servers which are closest to the end user would serve these assets.

### Nodejs

itis written in js
js is built on event loop driven architecture.

JS is single threaded.
Event looop make sure tthat your single thread is never blocked and async things happen in event loop
Node js can process multiple requests because of event loop leading to nodejs being stable and scalable.

### EXPRESS

IT is a framwork on top of nodejs which proivdes you with ease to do thing over nodejs

To run a nodejs file. 