// Submit course button

$('#btnSubmitCourse').on('click', submitCourse);

$('#course').keydown(function(event){
    if (event.key == 'Enter'){
        submitCourse(event);
    }
});

function submitCourse(event){
    data = {
        password: $('#password').val(),
        course: $('#course').val()
    };
    Cookies.set('password', data['password']);
    target = '/ta/' + data['course'];
    $(location).attr('href', target);
};

// Submit student button
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
    Cookies.set('username', data.name);
    Cookies.set('course', data.course);
    target = '/student/' + data.course;
    $(location).attr('href', target);
};
