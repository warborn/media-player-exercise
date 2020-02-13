const songs = [
  { name: "Afraid To Shoot Strangers", duration: "6:56" },
  { name: "Painkiller", duration: "6:06" },
  { name: "Hook In Mouth", duration: "4:49" },
  { name: "Rebel Yell", duration: "4:49" },
  { name: "Be All, End All", duration: "8:06" },
  { name: "Hammer Smashed Face", duration: "4:03" },
  { name: "Disposable Heroes", duration: "8:17" },
  { name: "...And Justice For All", duration: "9:47" },
  { name: "Hell Awaits", duration: "6:16" },
  { name: "As I Am", duration: "7:48" }
];

let playingSongIndex = -1;

function deleteChildrenOfNode(node) {
  node.innerHTML = "";
}

function createSongElement(name, duration, isPlaying) {
  const songElement = document.createElement("div");
  const nameElement = document.createElement("div");
  const durationElement = document.createElement("div");

  nameElement.classList.add("name");
  nameElement.innerHTML = name;

  durationElement.classList.add("duration");
  durationElement.innerHTML = duration;

  songElement.classList.add("song");

  if (isPlaying) {
    songElement.classList.add("-selected");
  }

  songElement.appendChild(nameElement);
  songElement.appendChild(durationElement);

  return songElement;
}

function renderSongs(node, songs) {
  deleteChildrenOfNode(node);

  songs.forEach(function(song, i) {
    const isPlaying = i === playingSongIndex;
    const songElement = createSongElement(song.name, song.duration, isPlaying);
    node.appendChild(songElement);
  });
}

function handlePlayButtonClick() {
  playingSongIndex = 0;
  renderSongs(songsNode, songs);
}

function handleNextButtonClick() {
  playingSongIndex = (playingSongIndex + 1) % 10;
  renderSongs(songsNode, songs);
}

function handleStopButtonClick() {
  playingSongIndex = -1;
  renderSongs(songsNode, songs);
}

songsNode = document.getElementById("songs");
playButton = document.getElementById("play");
nextButton = document.getElementById("next");
stopButton = document.getElementById("stop");

renderSongs(songsNode, songs);

playButton.addEventListener("click", handlePlayButtonClick);
nextButton.addEventListener("click", handleNextButtonClick);
stopButton.addEventListener("click", handleStopButtonClick);
