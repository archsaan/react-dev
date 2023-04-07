//nested elements
// const parent = React.createElement('div',{'id':'parent'},
//                     React.createElement('div',{'id':'child'},
//                         React.createElement('div',{'id':'heading'},'Hello world from React')))
//sibling elements
const parent = React.createElement('div',{'id':'parent'},
                    React.createElement('div',{'id':'child'},
                    [React.createElement('div',{'id':'heading'},'Hello world from React'),React.createElement('div',{'id':'heading2'},'Hello world from React')]))
   
const heading =React.createElement('h1',{'id':'heading'},'Hello world from React');
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(root);
root.render(parent);