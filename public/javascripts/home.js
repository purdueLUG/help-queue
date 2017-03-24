// Submit button
$('#btnSubmit').on('click', submit);
function submit(event){
    data = {
        name: $('#studentName').val(),
        course: $('#course').val()
    };
    Cookies.set('username', data['name']);
    target = '/course/' + data['course'];
    $(location).attr('href', target);
    //$.post(target, data);
    //$('body').load('/');
    console.log("trying to join queue " + data['course'] + " as " + data['name']);
};
