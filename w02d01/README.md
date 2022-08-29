# W02D01 - TDD, CommonJS, and NPM

### To Do
- [x] Manual testing
- [x] Making assertions
- [x] Bringing in outside code
- [x] Exporting our code
- [x] Intro to NPM: a Node package manager
- [x] Mocha test runner
- [x] Ignoring files/folders
- [x] Chai assertion library
- [x] What is TDD?
- [x] Practice unit testing

M&&C

### Types of Testing
* unit testing - testing the smallest pieces of our code (aka functions)
* integration testing - testing multiple pieces working together
* TDD - the tests are written before the code is written
* functional testing (end-to-end testing) - testing that the code's functionality works as expected


### Two Parts to Unit Testing
* actual value => value we get back from calling the function
* expected value => this is what we want to come back from the function

### Node
* Javascript runtime (the program that turns our JS into machine instruction)
* V8 engine pulled out of the browser (800K lines of code) and wrapped it in C++

### NPM
* Node Package Manager
* meaningless acronym
* bringing in other people's code (majority of the code lives on github)
* yarn is a competitor to NPM

### Ways of installation
* `--global` `-g` install the package on our operating system which means each directory will have access to it
* `--save` (not necessary because it's the default) install the package as a dependency of your project (installed locally and added to package.json)
* `--save-dev` install the package as a dev dependency (these will NOT be installed in production)



