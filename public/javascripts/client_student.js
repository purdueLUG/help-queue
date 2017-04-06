
// Enqueue student button
$('#btnEnqueue').on('click', enqueueStudent);
function enqueueStudent(event){
    // regex for finding course
    var re = ".*/(.*)$";
    // first element is full path, second is matched in the parens
    var course = window.location.pathname.match(re)[1];

    data = {
        name: Cookies.get('username'),
        course: course
    };

    // enqueue with web sockets
    socket.emit('enqueue', data);

    // enqueue with post request
    $.post(window.location.href + '/enqueue', data);
    $('body').load(window.location.href);
};
