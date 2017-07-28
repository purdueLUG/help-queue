// Enqueue student button
$('#btnEnqueue').on('click', enqueueStudent);
function enqueueStudent(event){
    // regex for finding course
    var re = "/(.*)/(.*)$";
    // first element is full path, second is matched in the parens
    var view = window.location.pathname.match(re)[1];
    var course = window.location.pathname.match(re)[2];
    var name = Cookies.get('username');

    var data = [
        course,
        name
    ];

    // publishes don't get routed to the publisher
    addStudentToQueueList(name, view);
    session.publish('com.help-queue.enqueue', data);
};
