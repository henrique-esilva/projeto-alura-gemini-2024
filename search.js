function findOnData(text) {
	let vec = [];
	for (let post of postsData) {
		if ( post.title.includes(text) || post.content.includes(text) ) {
			vec.push(post);
		}
	}
	return vec;
}

function searchButtonAction() {
	postsArea = document.getElementById("postsArea");
	postsArea.innerHTML = ``;
	content = document.getElementById('searchField').value;
	if (content != '') {
		match = findOnData(content);
		insertPosts( match, postsArea );
	} else {showAll();}
}
