# agora-core-view

Agora-core-view contais the whole interface for agora v3, and it's developed
with AngularJS.

# Installation

You need to install node.js. This project has been tested to work with node.js
v0.10.31. You can install it with your favourite package manager (apt-get for
example) or install it from the web and follow the instructions in the README 
(note, it requires gcc-g++ and other dependencies):

    wget http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
    tar zxf node-v0.10.31.tar.gz
    cd node-v0.10.31
    ./configure && make && sudo make install
    sudo chown -R `whoami` ~/.npm

You need also to install globally grunt and bower:

    sudo npm install -g grunt-cli grunt bower

After that, you can install the agora-core-view javascript dependencies:

    npm install && bower install

Once that's done, you have 3 simple Grunt commands available:

    grunt serve   #This will run a development server with watch & livereload enabled.
    grunt test    #Run local unit tests.
    grunt build   #Places a fully optimized (minified, concatenated, and more) in /dist

You might also need to install chrome browser for some of the tests performed by grunt test. For example, in Ubuntu:

    sudo apt-get install chromium-browser
    echo 'export CHROME_BIN=chromium-browser' >> ~/.bashrc
    . ~/.bashrc 

# Generator Note

Agora core view repository, using angular. It's generated using 
https://github.com/cgross/generator-cg-angular , take a look at the README.md 
file in there for more information about the structure and how to create new
angular services, modules, directives, etc.

# Unit testing

To execute the unit tests, run:

    grunt test

# Testing (E2E)

End to end testing executes tests in a browser instance. It requires a set of
dependencies that are updated in package.json (protractor related), so if you
executed npm install it should be fine.

Additionally, you should assure that you have an updated global protractor
installed. To do so, you can execute the following commands as root:

    npm install webdriver-manager
    webdriver-manager update

Now we're ready to execute the E2E tests. To do so, you need to launch three
commands in three different terminals. The first one launches in background an
http server serving the static app in background. To do so, execute:

    grunt serve

In another terminal, execute selenium web driver, the web browser where the
tests will be executed:

    webdriver-manager start

NOTE: do not press <enter> key in this terminal after executing this command
unless you want to stop the web driver.

In a third terminal, we will launch the E2E unit tests:

    protractor e2e.conf.js

