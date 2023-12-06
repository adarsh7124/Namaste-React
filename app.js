// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JavaScript";

// const root = document.getElementById("root");
// root.appendChild(heading);


//same above thing is done using react below
    // const heading = React.createElement(
    // "h1",
    // {id: "h1" , xyz: "heading"},
    // "Hello World from React!"
    // );

    // console.log(heading);//object

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);



//how we nest elements in react like this
/* 
<div id = "parent" >
    <div id = "child">
        <h1>"I'm in nested structure using React!"</h1>
        //if we want to add sibling element like 
        <h2>"I'm h2 tag"</h2>
    </div>
</div> 
*/

    // const parent = React.createElement("div",
    //     {id:"parent"},
    //     React.createElement("div",{id:"child"},
    //     [React.createElement("h1",{},"I'm in nested structure using React!"),
    //     //if we want sibling element then we pass the third argument in array form i.e []
    //      React.createElement("h2",{},"I'm h2 tag!")]));

    // root.render(parent);





//how we nest elements in elements react like this
/* 
<div id = "parent" >
    <div id = "child">
        <h1>"I'm in nested structure using React!"</h1>
        //if we want to add sibling element like 
        <h2>"I'm h2 tag"</h2>
    </div>
    <div id = "child1">
        <h1>"I'm in nested structure using React!"</h1>
        //if we want to add sibling element like 
        <h2>"I'm h2 tag"</h2>
    </div>
</div> 
*/


const parent1 = React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm in nested structure using React!"),
    //if we want sibling element then we pass the third argument in array form i.e []
        React.createElement("h2",{},"I'm h2 tag!"),
    ]),
     React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm in nested structure using React!"),
    //if we want sibling element then we pass the third argument in array form i.e []
        React.createElement("h2",{},"I'm h2 tag!"),
    ]),
]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent1);
    // root.render(heading);
//the code becomes messy it is not clear at all
//so here on we use JSX it overcome this




