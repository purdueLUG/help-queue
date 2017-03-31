
// Dequeue student button
$('#btnDequeue').on('click', DequeueStudent);
function DequeueStudent(event){
    data = {
        course: Cookies.get('course')
    };
    console.log(data);
    socket.emit('dequeue', data);
};
