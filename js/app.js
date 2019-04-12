const title = React.createElement(
    'h1', //element
      {id: 'main-title'}, // object containing attributes and values that element //will have
      'Projects and Classes' //content, or children of the element
    );
/*
const projects = React.createElement(
    'h2', //element
        {id: 'projects'}, // object containing attributes and values that element //will have
        'Projects' //content, or children of the element
    );

const classes_taken = React.createElement(
    'h2', //element
        {id: 'classes_taken'}, // object containing attributes and values that element //will have
        'Projects' //content, or children of the element
    );


    //console.log (title);
*/
 
ReactDOM.render( 
    title, 
        document.getElementById('root')
    );
/*
ReactDOM.render( 
    projects, 
        document.getElementById('root')
    );

ReactDOM.render( 
    classes_taken, 
        document.getElementById('root')
    );

*/