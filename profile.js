const createHeadings =()=>{
    $("#name").text("Benjamin");

    $("#major").text("Web Development");

    $("#year").text("Senior");

    $("#home").html("<em>America</em>");
}

$(document).ready(createHeadings);