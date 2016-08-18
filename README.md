# Pirates

Play: http://timothypratley.github.io/pirates

Wiki: https://github.com/timothypratley/pirates/wiki


## Overview

Sail around, sink ships, battle other players.


## Deployment

Client: `./deploy.sh`

Server: `git push heroku`


## Development

To start the server

    lein run

To get an interactive development environment run:

    lein figwheel

Open `localhost:3000`

To create a production build run:

    lein cljsbuild once min


## License

Copyright © 2016 Timothy Pratley

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
