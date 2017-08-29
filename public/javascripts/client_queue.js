// autobahn stuff
var crossbar_server= "127.0.0.01";

var connection = new autobahn.Connection({
    url: 'ws://' + crossbar_server + ':9000/',
    realm: 'realm1'
});

var session;

connection.onopen = function (new_session) {
    console.log("connected to WAMP router");

    session = new_session;

    // regex for finding course
    var re = "/(.*)/(.*)$";
    // first element is full path, second is student or ta, third is course
    var match = window.location.pathname.match(re);
    var view = match[1];
    var course = match[2];

    new_session.subscribe('com.help-queue.enqueue', function (args) {
        var name = args[1];
        if (args[0] == course){
            addStudentToQueueList(name, view);
        }
    });

    new_session.subscribe('com.help-queue.dequeue', function (args) {
        if (args[0] == course){
            removeStudentFromQueueList();
        }
    });
};

connection.onclose = function (reason, details) {
    console.log("WAMP connection closed", reason, details);
};

connection.open();

// queueList modifying functions
function addStudentToQueueList(name, view){
    console.log('add student ', name, 'on view ', view);
    var selector_string;
    var append_string;
    if (view == 'student'){
        selector_string = '#queueList li:contains("' + name + '")';
        append_string = '<li class=\'list-group-item\'>' + name + '</li>';
    }
    else if (view == 'ta'){
        selector_string = '#queueList td:contains("' + name + '")';
        append_string = '<tr><td>' + name + '</td><td>' + Date().toLocaleString() + '</td></tr>';
    }

    var duplicate = $(selector_string).length != 0;

    if (duplicate == false) {
        $('#queueList').append(append_string);
    }
};

function removeStudentFromQueueList(){
    $('#queueList > :first-child').remove();
};
