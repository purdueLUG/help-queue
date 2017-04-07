// TA enter course button
$('#taEnterQueue').submit(taEnterQueue);

function taEnterQueue(event){
    event.preventDefault();

    var course = $('#slctTACourse').val();
    var password = $('#oldPassword').val();

    Cookies.set('pass_' + course, password);
    target = '/ta/' + course;
    $(location).attr('href', target);
}

// TA create course button
$('#createQueue').submit(createQueue);

function createQueue(event){
    event.preventDefault();

    var course = $('#newCourse').val();
    var password = $('#newPassword').val();

    Cookies.set('pass_' + course, password);
    target = '/ta/' + course;
    $(location).attr('href', target);
}

// verify that passwords match
$('#newPassword').keyup(passwordMatch);
$('#verifyPassword').keyup(passwordMatch);

// disables "Create queue" button and changes password box color if passwords don't match
function passwordMatch(event){
    if($('#newPassword').val() != $('#verifyPassword').val()){
        $('#newPassword').css('border-color', 'red');
        $('#verifyPassword').css('border-color', 'red');
        $('#submitCreateQueue').prop('disabled', true);
    } else{
        $('#newPassword').css('border-color', 'green');
        $('#verifyPassword').css('border-color', 'green');
        $('#submitCreateQueue').prop('disabled', false);
    }
}

// Student enter course
$('#studentEnterQueue').submit(submitName);

function submitName(event){
    event.preventDefault();
    data = {
        name: $('#studentName').val(),
        course: $('#slctStudentCourse').val()
    };
    Cookies.set('username', data.name);
    Cookies.set('course', data.course);
    target = '/student/' + data.course;
    $(location).attr('href', target);
}
