const songs = [
    {name: "Afraid To Shoot Strangers", duration: "6:56"},
    {name: "Painkiller", duration: "6:06"},
    {name: "Hook In Mouth", duration: "4:49"},
];


function deleteChildrenOfNode(node) {
    node.innerHTML = "";
}

function createSongElement(name, duration) {
    const songElement = document.createElement("div");
    const nameElement = document.createElement("div");
    const durationElement = document.createElement("div");

    nameElement.classList.add("name");
    nameElement.innerHTML = name;

    durationElement.classList.add("duration");
    durationElement.innerHTML = duration;

    songElement.classList.add("song")
    songElement.appendChild(nameElement);
    songElement.appendChild(durationElement);

    return songElement;
}

function renderSongs(node, songs) {
    deleteChildrenOfNode(node);

    songs.forEach(function(song) {
        const songElement = createSongElement(song.name, song.duration);
        node.appendChild(songElement)
    });
}


songsNode = document.getElementById("songs");
renderSongs(songsNode, songs);