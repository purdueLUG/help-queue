// Dequeue student button
$('#btnDequeue').on('click', DequeueStudent);
function DequeueStudent(event){
    // regex for finding course
    var re = ".*/(.*)$";
    // first element is full path, second is matched in the parens
    var course = window.location.pathname.match(re)[1];

    data = [
        course
    ];

    // publishes don't get routed to the publisher
    removeStudentFromQueueList();
    session.publish('com.help-queue.dequeue', data);
};
