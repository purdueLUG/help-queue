// Enqueue student button
$('#btnEnqueue').on('click', enqueueStudent);
function enqueueStudent(event){
    //console.log(event.currentTarget.baseURI);
    data = {
        name: Cookies.get('username')
    };
    $.post(event.currentTarget.baseURI + '/enqueue', data);
    $('body').load(event.currentTarget.baseURI);
    console.log("trying to enqueue " + data['name']);
};

// Dequeue student button
$('#btnDequeue').on('click', DequeueStudent);
function DequeueStudent(event){
    $.post(event.currentTarget.baseURI + '/dequeue');
    $('body').load(event.currentTarget.baseURI);
};
