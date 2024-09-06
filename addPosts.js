function returnPost(dado) {
	const section = document.createElement('section');
	const header = document.createElement('header');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');

	h2.textContent = dado.title;
	p.textContent = dado.content;
	header.appendChild(h2);
	section.appendChild(header);
	section.appendChild(p);

	return section;
}

function insertPosts(posts, elementoPai) {
	let conteudo = '';
	for (let element of posts) {
		conteudo += `
		<section class="postInstance">
			<header><h2>${element.title}</h2></header>
			<p>${element.content}</p>
		</section>`;
	}
	elementoPai.innerHTML = conteudo;
}

//postsArea = document.getElementById("postsArea");
//insertPosts(postsData, postsArea);
