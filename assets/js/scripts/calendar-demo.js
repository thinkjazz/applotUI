

$(document).ready(function() {


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events .ex-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true, // maintain when user navigates (see docs on the renderEvent method)
            className: $(this).attr('data-class')
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });

    
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2019-10-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Событие',
                start: '2019-10-01',
                backgroundColor: '#e74c3c'
            },
            {
                title: 'Долгая лотерия',
                start: '2019-10-07',
                end: '2019-10-10',
                backgroundColor: '#2ecc71'
            },
            {
                title: 'Платная лотерея',
                start: '2019-10-11',
                end: '2019-10-13',
                backgroundColor: '#23B7E5'
            },
            {
                title: 'Розыгрыш пепяк',
                start: '2019-10-12',
                end: '2019-10-13'
            },
            {
                title: 'Тупая макака',
                start: '2019-10-12T'
            },
            {
                title: 'Purple Haze',
                start: '2019-10-13',
                backgroundColor: '#546de5'
            },
            {
                title: 'Кликни Google',
                url: 'http://google.com/',
                start: '2019-10-28'
            }
        ],
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        }
    });
    
});
