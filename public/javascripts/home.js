// Submit Course button

console.log('hello from home.js');

$('#btnSubmitCourse').on('click', submitCourse);

$('#course').keydown(function(event){
    if (event.key == 'Enter'){
        submitCourse(event);
    }
});

function submitCourse(event){
    console.log('submit course press');
    data = {
        password: $('#password').val(),
        course: $('#course').val()
    };
    Cookies.set('password', data['password']);
    target = '/ta/' + data['course'];
    console.log('trying to access ' + target);
    $(location).attr('href', target);
};

// Submit Name button
$('#btnSubmitName').on('click', submitName);

$('#studentName').keydown(function(event){
    if (event.key == 'Enter'){
        submitName(event);
    }
});

function submitName(event){
    data = {
        name: $('#studentName').val(),
        course: $('#slctCourse').val()
    };
    Cookies.set('username', data['name']);
    target = '/course/' + data['course'];
    console.log('trying to access ' + target);
    $(location).attr('href', target);
};
