
// Enqueue student button
$('#btnEnqueue').on('click', enqueueStudent);
function enqueueStudent(event){
    data = {
        name: Cookies.get('username'),
        course: Cookies.get('course')
    };
    socket.emit('enqueue', data);
};
