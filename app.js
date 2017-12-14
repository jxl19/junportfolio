function showProfile() {
    $('.main-content .content-wrap').children().hide();
    $('#profile').fadeIn();
    $('.main-content').addClass("align-center");
    $('.main-content').removeClass("clear-padding");
}

function showProjects() {
    $('#section1').hide();
    $('#section2').removeClass("clear-padding");
    $('#section2').fadeIn();
}

function showProjects() {
    $('.main-content .content-wrap').children().hide();
    $('#about').fadeIn();
    $('.main-content').removeClass("clear-padding");
    $('.main-content').addClass("align-center");
}

// creates li for each nav item
function createNav() {
    var content = ["Jun Lei", "Projects"];
    content.forEach(function (i) {
        var liItem = $("<li><a id='" + content.indexOf(i) +
            "' class='nav-link'>" + i + "</a></li>");
        $('.justify-content-center').append(liItem);
        liItem.click(function () {
            navRouter(liItem);
        });
    });
}

function navRouter(i) {
    if (i.text() === "Jun Lei") {
        navAnimation('#0');
        showProfile();
    }
    else if (i.text() === "Projects") {
        navAnimation('#1');
        showProjects();
    }
}

function navAnimation(selection) {
    if (selection === '#0') {
        $('#0').addClass('nav-link-open');
        $('#1, #2').removeClass('nav-link-open');
    }
    else if (selection === '#1') {
        $('#1').addClass('nav-link-open');
        $('#0, #2').removeClass('nav-link-open');
    }
}

$(function () {
    var year = new Date().getFullYear()
    document.querySelector('footer p').innerHTML = '&copy; Jun Lei ' + year
    createNav();
    navAnimation('#0');
    showProfile();
    $('body').fadeIn().css({
        'display': 'block'
    });
});

