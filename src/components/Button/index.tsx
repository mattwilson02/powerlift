import { Button as NativeBaseButton, IButtonProps } from 'native-base';
import { ReactNode } from 'react';

type Props = IButtonProps & {
  children: ReactNode;
  onPress: () => void;
};

const Button = ({ children, onPress }: Props) => {
  return (
    <NativeBaseButton
      borderColor='background.10'
      onPress={onPress}
      bgColor='background.0'
      borderWidth={2}
      _text={{
        color: 'background.10'
      }}
      _hover={{
        _text: {
          color: 'background.10'
        },
        bgColor: 'background.0'
      }}
      _pressed={{
        _focus: {
          borderColor: 'build.1',
          borderWidth: 2
        },
        _text: {
          color: 'build.1'
        },
        borderColor: 'build.1',
        bgColor: 'background.0'
      }}
    >
      {children}
    </NativeBaseButton>
  );
};

export default Button;
