import { Button as NativeBaseButton, IButtonProps } from 'native-base';
import { ReactNode } from 'react';

type Props = IButtonProps & {
  children: ReactNode;
  onPress: () => void;
};

const Button = ({ children, onPress }: Props) => {
  return (
    <NativeBaseButton
      borderColor='white'
      onPress={onPress}
      bgColor='gray.800'
      borderWidth={2}
      _text={{
        color: 'white'
      }}
      _hover={{
        _text: {
          color: 'white'
        },
        bgColor: 'black'
      }}
      _pressed={{
        _focus: {
          borderColor: 'pink.600',
          borderWidth: 2
        },
        _text: {
          color: 'pink.600'
        },
        borderColor: 'pink.600',
        bgColor: 'black'
      }}
    >
      {children}
    </NativeBaseButton>
  );
};

export default Button;
