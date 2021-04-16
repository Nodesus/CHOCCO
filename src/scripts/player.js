const playerContainer = document.querySelector(".player");
const playerWrapper = document.querySelector(".player__wrapper");
const video = document.querySelector(".player__video");
const playerStart = document.querySelector(".player__start");
const playerPlayback = document.querySelector(".player__playback");
const progressBar = document.querySelector(".player__playback-line");
const playerVideoCircle = document.querySelector(".player__playback-button");
const playerVolumeIcon = document.querySelector(".player__volume-icon");
const playerVolumeBar = document.querySelector(".player__volume");
const playerVolumeCircle = document.querySelector(".player__volume-bar");
let startVolume = 0;
let currentVolume;

// Запуск

const handleStart = () => {
  video.paused ? video.play() : video.pause();
};



playerStart.addEventListener("click", handleStart);
playerWrapper.addEventListener("click", handleStart);

//  Старт/пауза

video.onplay = () => {
  playerContainer.classList.add("player__active");
};

video.onpause = () => {
  playerContainer.classList.remove("player__active");
};

// Звук

const changeVolume = (e) => {
  const currentTarget = e.currentTarget;
  const left = currentTarget.getBoundingClientRect().left;
  const soundBarWidth = parseInt(getComputedStyle(currentTarget).width);
  const newPosition = e.pageX - left;
  const percentValue = (newPosition / soundBarWidth) * 100;
  if (percentValue < 100) {
    video.volume = percentValue / 100;
    playerVolumeCircle.style.width = `${percentValue}%`;
  };
};

const toggleSound = () => {
  playerVolumeIcon.classList.toggle("muted");

  if (video.volume === 0) {
    video.volume = currentVolume;
    playerVolumeCircle.style.width = `${currentVolume * 100}%`;
  } else {
    currentVolume = video.volume;
    video.volume = startVolume;
    playerVolumeCircle.style.width = `${startVolume}%`;
  }
}

playerVolumeBar.addEventListener("click", changeVolume);
playerVolumeIcon.addEventListener("click", toggleSound);

// Перемотка

const handleDuration = (e) => {
  const barSize = parseInt(getComputedStyle(playerPlayback).width);
  const circleWidth = parseInt(getComputedStyle(playerVideoCircle).width);
  const offsetX = e.offsetX;
  const newSize = offsetX + circleWidth / 2;
  const newTime = (newSize * video.duration) / barSize;
  video.currentTime = newTime;
};

const updateTime = () => {
  let blueBar = video.currentTime / video.duration;
  progressBar.style.width = `${blueBar * 100}%`;

  if (video.ended) {
    video.currentTime = 0;
  }
};

playerPlayback.addEventListener("click", handleDuration);
video.addEventListener("timeupdate", updateTime);