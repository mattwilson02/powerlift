import { Text } from 'native-base';

type Props = {
  sendTime: (time: string) => void;
  time: string;
};

const Clock = ({ sendTime, time }: Props) => {
  const clock = () => {
    let date = new Date();
    let hour: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    let seconds: number | string = date.getSeconds();

    let session = 'AM';

    if (hour > 12) {
      hour = hour - 12;
      session = 'PM';
    }

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let time: any = `${hour}:${minutes}:${seconds} ${session}`;

    sendTime(time);
  };

  setTimeout(clock, 1000);

  return (
    <>
      <Text
        color='white'
        fontWeight={600}
      >
        {time}
      </Text>
    </>
  );
};

export default Clock;
