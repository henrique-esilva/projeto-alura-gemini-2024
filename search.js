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
	content = document.getElementById('searchField').value;
	match = findOnData(content);
	insertPosts( match, document.getElementById("postsArea") );
}
