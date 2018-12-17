main();

function main() {
	loadStuff();
}

function loadStuff() {
	$("#top-nav").load("/docs/pages/top-nav.html");
	$("#footer").load("/docs/pages/footer.html");
}
