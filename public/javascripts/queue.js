// Enqueue student button
$('#btnEnqueue').on('click', enqueueStudent);
function enqueueStudent(event){
    data = {
        name: $('#studentName').val()
    };
    $.post('/enqueue', data);
    $('body').load('/');
    console.log("trying to enqueue " + data['name']);
};

// Dequeue student button
$('#btnDequeue').on('click', DequeueStudent);
function DequeueStudent(event){
    $.post('/dequeue', data);
    $('body').load('/');
};
