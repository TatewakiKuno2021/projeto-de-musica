window.player = {
  playPause: document.querySelector('[data-js="music-play"]'),
  range: document.querySelector('[data-js="music-duration"]'),

  //  Define variables for control audio state
  audio: '',
  isPlaying: false,
  audioDuration: 0,
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,

  start() {
    this.playPause.onclick = () => this.next();
  },

  play(src) {
    if (this.audio === '') {
      this.audio = new Audio(src);
      this.play();

      // Dessa forma parece funcionar pq parece que da tempo da música começar ? : pesquisar
      // this.audioDuration = setInterval(this.rangeSlider, 1000);
      console.log('primeiro vez audio duration: ' + player.audioDuration);

      this.audio.onloadedmetadata = function () {
        player.audioDuration = this.duration;

        console.log(
          'audio duraion dessa vez dentro do onload: ' + player.audioDuration,
        );
      };

      console.log('segunda vez audio duration: ' + player.audioDuration);
    } else if (this.audio.paused) {
      this.audio.play();
      console.log('dentro do pause audio duration: ' + player.audioDuration);
    } else {
      console.log('acabou e vai iniciar uma nova');
    }
  },
  // rangeSlider() {
  //   console.log('entrou 1');
  //   let position = 0;
  //   if (!isNaN(player.audio.duration)) {
  //     console.log('entrou 2');
  //     console.log(player.range);

  //     position = player.audio.duration;
  //     player.range.max = position;
  //   }
  // },
  pause() {
    this.audio.pause();
  },
  next() {
    this.currentAudio = this.audioData[this.currentPlaying];

    if (!this.isPlaying) {
      this.play(this.currentAudio.src);
      this.isPlaying = true;

      // Depois que executa a primeira vez ele carrega
      console.log(
        'audio duration dentro da função principal: ' + player.audioDuration,
      );

      // this.range.max = this.duration;
      this.playPause.classList.remove('fa-play');
      this.playPause.classList.add('fa-pause');
    } else {
      this.pause();
      this.isPlaying = false;
      this.playPause.classList.remove('fa-pause');
      this.playPause.classList.add('fa-play');
    }
  },
  rangedVariance() {
    Song.currentTime = this.value;
  },
};
