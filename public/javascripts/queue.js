var socket = io();

// asynchronous receive behavior
socket.on('enqueue', function(msg){
    $('#queueList').append('<li class=\'list-group-item\'>' + msg.name + '</li>');
});

socket.on('dequeue', function(msg){
    // removes the first child of #queueList
    $('#queueList :first-child').remove();
});
