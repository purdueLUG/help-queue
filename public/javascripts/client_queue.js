var socket = io();

// asynchronous receive behavior
socket.on('enqueue', function(msg){
    // regex for finding course
    var re = "/(.*)/(.*)$";
    // first element is full path, second is student or ta, third is course
    var match = window.location.pathname.match(re);
    var view = match[1];
    var course = match[2];

    // only enqueue if on the right course
    if (course == msg.course){
        //$('body').load(window.location.href);
        if(view == 'student'){
            $('#queueList').append('<li class=\'list-group-item\'>' + msg.name + '</li>');
        }
        else if (view == 'ta'){
            //$('#queueList').append('<tr><td>' + msg.name + '</td><td>test</td></tr>');
            $('#queueList').append('<tr><td>' + msg.name + '</td><td>' + Date().toLocaleString() + '</td></tr>');
        }
    }
});

socket.on('dequeue', function(msg){
    // regex for finding course
    var re = ".*/(.*)$";
    // first element is full path, second is matched in the parens
    var course = window.location.pathname.match(re)[1];

    // only dequeue if on the right course
    if (course == msg.course){
        //$('body').load(window.location.href);
        $('#queueList :first-child').remove();
    }
});
