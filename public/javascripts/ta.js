
// Dequeue student button
$('#btnDequeue').on('click', DequeueStudent);
function DequeueStudent(event){
    data = {
        course: Cookies.get('course')
    };
    socket.emit('dequeue', data);
};
