var socket = io();

// asynchronous receive behavior
socket.on('enqueue', function(msg){
    // regex for finding course
    var re = ".*/(.*)$";
    // first element is full path, second is matched in the parens
    var course = window.location.pathname.match(re)[1];

    // only append if trying to enqueue on the right course
    if (course == msg.course){
        $('#queueList').append('<li class=\'list-group-item\'>' + msg.name + '</li>');
    }
});

socket.on('dequeue', function(msg){
    // regex for finding course
    var re = ".*/(.*)$";
    // first element is full path, second is matched in the parens
    var course = window.location.pathname.match(re)[1];

    // only dequeue if on the right course
    if (course == msg.course){
        // removes the first child of #queueList
        $('#queueList :first-child').remove();
    }
});
