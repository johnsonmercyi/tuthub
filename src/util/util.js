export function animate(
  el,
  delay,
  duration,
  iterations,
  easing = "ease-in-out",
  frames = [],
  onFinish = () => { },
  onFinishDelay
) {
  let keyframes = new KeyframeEffect(el, frames, {
    id: "animate_element_",
    easing: easing,
    iterations: iterations,
    fill: "forwards",
    duration: duration,
    delay: delay,
  });

  let animation = new Animation(keyframes, document.timeline);
  animation.play();

  if (onFinish) {
    if (onFinishDelay) {
      setTimeout(() => {
        onFinish();
      }, delay + onFinishDelay);
    } else {
      setTimeout(() => {
        onFinish();
      }, delay + duration);
    }
  }

  return animation;
}

export function setElementStyle(element, property, value) {
  element.style[property] = value;
}

export function setAllElementStyle(property, value, ...elements) {
  for (let i = 0; i < elements.length; i++)
    elements[i].style[property] = value;
}

export function greet() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return greeting;
}

export function getRandomTime() {
  const minTime = 1000; // Minimum time in milliseconds
  const maxTime = 4000; // Maximum time in milliseconds

  // Generate a random number between 0 and 1
  const randomFraction = Math.random();

  // Calculate the range size
  const range = maxTime - minTime + 1;

  // Scale the random fraction to fit within the range and add the minimum time
  const randomTime = Math.floor(randomFraction * range) + minTime;

  return randomTime;
}
