var jsonData = [{ "id": 1, "first_name": "Audi", "last_name": "Tolputt", "email": "atolputt0@telegraph.co.uk", "gender": "Female", "ip_address": "128.138.253.42" },
        { "id": 2, "first_name": "Nydia", "last_name": "Bradborne", "email": "nbradborne1@ameblo.jp", "gender": "Female", "ip_address": "226.84.127.96" },
        { "id": 3, "first_name": "Penni", "last_name": "Moff", "email": "pmoff2@sfgate.com", "gender": "Female", "ip_address": "238.4.204.47" },
        { "id": 4, "first_name": "Melloney", "last_name": "Latek", "email": "mlatek3@istockphoto.com", "gender": "Female", "ip_address": "152.1.213.39" },
        { "id": 5, "first_name": "Cleve", "last_name": "Duffer", "email": "cduffer4@phpbb.com", "gender": "Male", "ip_address": "149.31.213.67" },
        { "id": 6, "first_name": "Annis", "last_name": "Bingley", "email": "abingley5@deviantart.com", "gender": "Female", "ip_address": "99.54.232.182" },
        { "id": 7, "first_name": "Cindie", "last_name": "Annand", "email": "cannand6@youtu.be", "gender": "Female", "ip_address": "134.7.127.36" },
        { "id": 8, "first_name": "Jay", "last_name": "Cana", "email": "jcana7@icio.us", "gender": "Male", "ip_address": "166.11.95.88" },
        { "id": 9, "first_name": "Bart", "last_name": "Goslin", "email": "bgoslin8@joomla.org", "gender": "Male", "ip_address": "98.74.162.130" },
        { "id": 10, "first_name": "Maddie", "last_name": "Janauschek", "email": "mjanauschek9@ftc.gov", "gender": "Male", "ip_address": "33.176.217.50" },
        { "id": 11, "first_name": "Tarrance", "last_name": "Addy", "email": "taddya@timesonline.co.uk", "gender": "Male", "ip_address": "196.227.49.187" },
        { "id": 12, "first_name": "Judah", "last_name": "Gomm", "email": "jgommb@hud.gov", "gender": "Male", "ip_address": "45.72.57.59" },
        { "id": 13, "first_name": "Nisse", "last_name": "Laguerre", "email": "nlaguerrec@answers.com", "gender": "Female", "ip_address": "254.72.94.77" },
        { "id": 14, "first_name": "Lynnette", "last_name": "Soars", "email": "lsoarsd@odnoklassniki.ru", "gender": "Female", "ip_address": "226.1.16.123" },
        { "id": 15, "first_name": "Ailee", "last_name": "Elintune", "email": "aelintunee@dagondesign.com", "gender": "Female", "ip_address": "242.203.195.199" }]

var titles = ['id', 'first_name', 'last_name', 'email', 'gender'];

$(document).ready(function() {
    var $table = $('<table />').attr('border','1');
    var $tr = $('<tr />');
    titles.forEach(function(o) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);


    //데이터 영역
    jsonData.forEach(function(o) {
        $tr = $('<tr />').mouseenter(mouseenterFunc).mouseout(mouseoutFunc);

        titles.forEach(function(f) {
            $tr.append($('<td />').text(o[f]));
        })
        $tr.append($('<td />').append($('<button />').text('Click').click(btnFunc)));
        // $tr.append($('<td />').html('<button>Click</button>'));
        $table.append($tr);
    });
    
    $('#show').append($table);
})

function mouseenterFunc() {
    $(this).css('background','yellow');
}
function mouseoutFunc() {
    $(this).css('background','');
}

function btnFunc() {
//	this.parentNode.parentNode.remove();
	$(this).parent().parent().remove()
}