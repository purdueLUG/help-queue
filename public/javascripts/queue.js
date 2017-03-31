var socket = io();

// asynchronous receive behavior
socket.on('enqueue', function(msg){
    $('#queueList').append('<li class=\'list-group-item\'>' + msg.name + '</li>');
});

// Enqueue student button
$('#btnEnqueue').on('click', enqueueStudent);
function enqueueStudent(event){
    data = {
        name: Cookies.get('username'),
        course: Cookies.get('course')
    };
    console.log(data);
    socket.emit('enqueue', data);
    //return false;
};

