window.addEventListener('load', start);

var inputFrequency = null;
var inpuRange = null;
var divPodcasts = null;

function start () {
    inputFrequency = document.querySelector('#inputFrequency');
    inputRange = document.querySelector('#inputRange');
    divPodcasts = document.querySelector('#divPodcasts');

    inputRange.value = '87.5';
    inputFrequency.value = '87.5';
    divPodcasts.innerHTML = 'Olá';

    inputRange.addEventListener('input', handleRangeChange);

    handlePodcastFrom(inputRange.value);
}

function handleRangeChange(event) {
  var currentFrequency = (event.target.value);
  inputFrequency.value = currentFrequency;

  handlePodcastFrom(currentFrequency);
}

function handlePodcastFrom(frequency) {
  
  var foundPodcast = null;
 
  //for(var i = 0; i < realPodcasts.length; i++) {
    //var currentPodcast = realPodcasts[i];

    //if (currentPodcast.id === frequency) {
      //foundPodcast = currentPodcast;
      //break;
    //}
  //}

  foundPodcast = realPodcasts.find(function(currentPodcast){
    return currentPodcast.id === frequency;
  })

  renderPodcasts(foundPodcast);
}

function renderPodcasts(podcast) {

  if (!podcast) {
    divPodcasts.innerHTML = 'Nenhum podcast encontrado!';
    return;
  }

  //var img = document.createElement('img');
  //img.src = './img/' + podcast.img;

  //var title = document.createElement('h2');
  //title.textContent = podcast.title;

  //var description = document.createElement('p');
  //description.textContent = podcast.description;

  //divPodcasts.innerHTML = '';
  //divPodcasts.appendChild(img);
  //divPodcasts.appendChild(title);
  //ivPodcasts.appendChild(description);

  var { img, title, description } = podcast; 

  divPodcasts.innerHTML = `
  <img src='./img/${img}'/>
  <h2>${title}</h2>
  <p>${description}</p>
  `;
}