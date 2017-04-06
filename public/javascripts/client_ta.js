
// Dequeue student button
$('#btnDequeue').on('click', DequeueStudent);
function DequeueStudent(event){
    // regex for finding course
    var re = ".*/(.*)$";
    // first element is full path, second is matched in the parens
    var course = window.location.pathname.match(re)[1];

    data = {
        course: course
    };

    // enqueue with web sockets
    socket.emit('dequeue', data);

    // enqueue with post request
    $.post(window.location.href + '/dequeue', data);
    $('body').load(window.location.href);
};
