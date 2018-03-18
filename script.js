var imgs = ['1.PNG',
'2.PNG',
'3.PNG',
'4.PNG',
'5.PNG',
'6.PNG',
'7.PNG',
'8.PNG',
'9.PNG',
'10.PNG',
'11.PNG',
'12.PNG',
'13.PNG',
'14.PNG',
'15.PNG',
'16.PNG',
'17.PNG',
'18.PNG',
'19.PNG',
'20.PNG',
'21.PNG',
'22.PNG',
'23.PNG',
'24.PNG',
'25.PNG',
'26.PNG',
'27.PNG',
'28.PNG',
'29.PNG',
'30.PNG',
'31.PNG',
'32.PNG',
'33.PNG',
'34.PNG',
'35.PNG',
'36.PNG',
'37.PNG',
'38.PNG',
'39.PNG',
'40.PNG',
'41.PNG',
'42.PNG',
'43.PNG',
'44.PNG',
'45.PNG',
'46.PNG',
'47.PNG',
'48.PNG',
'49.PNG',
'50.PNG',
'51.PNG',
'52.PNG',
'53.PNG',
'54.PNG',
'55.PNG',
'56.PNG',
'57.PNG',
'58.PNG',
'59.PNG',
'60.PNG',
'61.PNG',
'62.PNG',
'63.PNG',
'64.PNG',
'65.PNG',
'66.PNG',
'67.PNG',
'68.PNG',
'69.PNG',
'70.PNG',
'71.PNG',
'72.PNG',
'73.PNG',
'74.PNG',
'75.PNG',
'76.PNG',
'77.PNG',
'78.PNG',
'79.PNG',
'80.PNG',
'81.PNG',
'82.PNG',
'83.PNG',
'84.PNG',
'85.PNG',
'86.PNG',
'87.PNG',
'88.PNG',
'89.PNG',
'90.PNG',
'91.PNG',
'92.PNG',
'93.PNG',
'94.PNG',
'95.PNG',
'96.PNG',
'97.PNG',
'98.PNG',
'99.PNG',
'100.PNG',
'101.PNG'];
var handlers = ["Yong Chen",
"Helen Wang",
"Justyn Olliviere",
"Meryam Bukhari",
"Srivathsan Rajagopalan",
"Alexander Gillmor",
"Daniel Yao",
"Jingwei Shen",
"Fuquan Wang",
"Matthew Condrey",
"Tenzin Kunsal",
"Lily Chao",
"DeAnna Caggiano",
"Abigail Lieberfarb",
"Tate Chow",
"Adi Pruthi",
"Akhil Kuduvalli Ramesh",
"Shubh Jagani",
"Manasi Goel",
"Charles Bai",
"Shan Pruthi",
"Jeraz Cooper",
"Michael Min",
"Marco Valente",
"Mattis Kancans Envall",
"Michael Stephens",
"Alexander Haefner",
"Grace Jiras",
"Rebecca Nguyen",
"Manpreet Singh",
"Kacy MacIntyre",
"Daniel Medani",
"Brendan Schouwerwou",
"Jay Hill",
"Ty$",
"John Trudeau",
"Gavin Couvrey-Jacobs",
"Kevin Chacon Levin",
"Connor Wong",
"Aaron Matvya",
"Mary Alice ",
"Helen Zhu",
"Katana Arnett",
"Wolfe Styke",
"Quito de Sequera",
"Sebastien Couvidat",
"Peter Weir",
"Joshua Braverman",
"Joshua Rosenfeld",
"Yue Wu",
"Brittany Cheng",
"Alexis Hawkins",
"Zain Humayun",
"Luca Giovagnoli",
"Eddy Kim",
"Hans He",
"Gaurav Keswani",
"Yuki Pan",
"Qasim Zeeshan",
"Wing Yung",
"Rajeev Sarvaria",
"Muhammad Siddeek",
"Nirmal Doss",
"Anon",
"Zaid Elkurdi",
"Brandon Pearl",
"Denis Vlasov",
"Jason Yoon",
"Theresa O'Shea",
"Eoin Nugent",
"Sijia Wang",
"Eric Maguire",
"Ying Lin",
"Marisa Rando",
"Eileen Kim",
"Jason Palumbo",
"Bobby Durben",
"Andres Hernandez",
"Cecelia Young",
"Alex Cook",
"Natalia Juncadella",
"Ravit Ben Zion",
"Stephanie Lager",
"Patrick Kenney",
"Joscelynne Ramirez",
"Jackie Kindall",
"Katja Stolle",
"Justin Sacbibit",
"Harkamal Jot Kumar",
"Michael Marek",
"Steve Workman",
"Joe Miller",
"Raymond Zhang",
"Yoann Roman",
"LaLa Tuiolosega",
"Bernard Laveaux",
"William Cheng",
"David Wang",
"Cameron Wheeler",
"Jason MacDonald",
"Emily Cho"];

function openModal(ldap, src) {
	$("#modal-ldap").text(ldap);
	$("#modal-picture").attr("src", src);

	$("#exampleModal").modal()
}

function load() {
	addModal()

	$( "#search" ).change(function() {
	 	search();
	});

	loadImages(imgs, handlers);
}

function addModal() {
	$('.col').click(function() {
		var ldap = $(this).find('p:first').text();
		var src = $(this).find('img:first').attr("src");


   		openModal(ldap, src)
	});

}

function search() {
	query = $("#search").val();
	$("#image-container").empty();

	if (query.trim() != "") {
		index = handlers.findIndex(function(element) {
			return element.toLowerCase().includes(query.toLowerCase());
		});

		if (index != -1) {
			images = [];
			images.push(imgs[index]);
			ldaps = [];
			ldaps.push(handlers[index]);

			loadImages(images, ldaps);
		} else {
			$("#image-container").append("<p>No doodles were found :(");
		}
	} else {
		loadImages(imgs, handlers);
	}
}

function loadImages(images, ldaps) {
	var n = images.length;
	var row;

	for(var i = 0; i < n; i++) {
		if (i % 6 == 0) {
			row = $('<div class="row"></div>').appendTo("#image-container");
		}

		row.append('<div class="col"><p>'+ldaps[i]+'</p><img class="thumbail" src="imgs/'+images[i]+'"></div>');
	}

	addModal();
}
