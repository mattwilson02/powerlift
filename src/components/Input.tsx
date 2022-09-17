import { Input as NativeBaseInput, IInputProps } from 'native-base';
import { forwardRef } from 'react';

const Input = forwardRef(({ ...rest }: IInputProps, ref) => {
  return (
    <NativeBaseInput
      bg='blue.200'
      color='black'
      borderColor='coolGray.300'
      borderWidth={2}
      h={10}
      _focus={{
        borderColor: 'blue.300',
        bg: 'blue.200'
      }}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
