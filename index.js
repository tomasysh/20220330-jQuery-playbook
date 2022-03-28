$(document).ready(function() {

    const students = ['amy', 'sophia', 'tomas'];

    $.each(students, function(idx, student) {
        const studentLabel = `${ student.charAt(0).toUpperCase()}${student.slice(1) }`;
        console.log(`NO.${ idx } is ${ studentLabel }`);
    });

});