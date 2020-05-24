window.addEventListener('load', start);

var inputFrequency = null;
var inpuRange = null;
var divPodcasts = null;

function start () {
    inputFrequency = document.querySelector('#inputFrequency');
    inputRange = document.querySelector('#inputRange');
    divPodcasts = document.querySelector('#divPodcasts');

    inputRange.value = '87';
    inputFrequency.value = '200';
    divPodcasts.innerHTML = 'Hello!';

    inputRange.addEventListener('input', handleRangeChange);  
}

function handleRangeChange(event) {
  var currentFrequency = (event.target.value);
  inputFrequency.value = currentFrequency;

  handlePodcastFrom(currentFrequency);
}

function handlePodcastFrom(frequency) {
  
  var foundPodcast = null;
  //console.log(realPodcasts);
  for(var i = 0; i < realPodcasts.length; i++) {
    var currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }

  if (foundPodcast) {
    renderPodcasts(foundPodcast);
  } else {
      divPodcasts.innerHTML = 'Nenhum podcast encontrado!';
  }

}

function renderPodcasts(podcast) {
  const img = document.createElement('img');
  img.src = './img/' + podcast.img;

  divPodcasts.appendChild(img);
}