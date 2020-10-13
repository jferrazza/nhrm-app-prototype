console.warn("Welcome to debug.js");
function ___quit() {

    if (confirm("(debug says) This will quit the prototype to home"))
        document.location = 'home.sandbox.html';
}
function ___name(p) {
    person = p;
    $("._name").html(person);
    //console.info("Test name for this page set to " + p);
    //console.info("Use ___name(...) to change");
    return person;
}
function ___back(p) {
    $("._back").html(p);

    return p;
}
___name(person);

function ___makeTopbarOpaque(show) {

    if (show == false) {
        $(".nh_topbar").addClass('nh_home_hide');
        return "Showing transparent topbar";
    }
    else if (show == true) {
        $(".nh_topbar").removeClass('nh_home_hide');
        return "Showing opaque topbar";
        //console.info("Use ___makeTopbarOpaque(...) to change.");
    }
}

//function ___firstPageSelected(show) {

//    if (show == true) {
//        $("._nav").replaceWith('<button type="button" class="_nav btn-light btn active">' + $("._nav").html() + '</button>');
//        return "Home or first section page selected previewing";

//    }
//    else if (show == false) {
//        $("._nav").replaceWith('<button type="button" class="_nav btn-light btn">' + $("._nav").html() + '</button>');
//        return "Home or first section page deselected previewing";

//    }
//}
//function ___changeSectionName(text) {
//    $("._nav").html(text);
//    return "Section name previewing as " + text;
//}
//function ___changeSectionName(text, text2) {
//    $("._nav").html(text);
//    $("._title").html(text2);
//    return "Section name previewing as " + text + ", Title previewing as " + text2;
//}

function ___title(text) {
    $("._title").html(text);
}
function ___select(name) {
    $(name).addClass("active");

    //if ($(name)[0] != $("._main1")[0]) {
    //    $(name).html($(name).html() + "<br/><span class='_section_subtitle'> (Click to go to section home)</span>");
    //    $("._main1").html($("._main1").html() + "<br/><span class='_section_subtitle'> Go to homepage</span>");
    //}


}


function ___changeHeader(mode, back, title, name, sel) {
    ___makeTopbarOpaque(mode)
    ___name(name)
    ___title(title)
    ___back(back)
    ___select(sel)
    console.info("(debug says) Changed header to opaque '" + mode + "' back button says '" + back + "' title says '" + title + "' username is '" + name + "' selected menuitem is '" + sel + "'")
}

if ($(".nh_home_hide").length != 0)
    console.info("Navbar set to transparent by HTML. Use ___makeTopbarOpaque(true) to override.");
console.warn("Done");