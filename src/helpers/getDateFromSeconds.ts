export const toFormattedTime = function (
  input: number,
  withHours = true,
  roundSeconds = true
) {
  if (roundSeconds) {
    input = Math.ceil(input);
  }

  let hoursString = '00';
  let minutesString = '00';
  let secondsString = '00';
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  hours = Math.floor(input / (60 * 60));
  input = input % (60 * 60);

  minutes = Math.floor(input / 60);
  input = input % 60;

  seconds = input;

  hoursString = hours >= 10 ? hours.toString() : '0' + hours.toString();
  minutesString = minutes >= 10 ? minutes.toString() : '0' + minutes.toString();
  secondsString = seconds >= 10 ? seconds.toString() : '0' + seconds.toString();

  return (
    (withHours ? hoursString + ':' : '') + minutesString + ':' + secondsString
  );
};
