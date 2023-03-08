const problem = document.querySelector('#problem')
const code = document.querySelector('#code')
const answer = document.querySelector('#answer')

const codewarsProblem = document.createTextNode('Put the question in here')
problem.appendChild(codewarsProblem)

const codeWarsSampleCode = document.createTextNode('This is the sample code')
code.appendChild(codeWarsSampleCode)


const codeWarsAnswer = document.createTextNode('This is the sample answer')
answer.appendChild(codeWarsAnswer)

// run in terminal
// python -m http.server 8000