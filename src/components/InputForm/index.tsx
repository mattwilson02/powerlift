import {
  FormControl,
  IInputProps,
  Input,
  Text,
  VStack,
  WarningIcon
} from 'native-base';
import { forwardRef } from 'react';
import {
  Control,
  Controller,
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge
} from 'react-hook-form';

type Props = IInputProps & {
  control: Control;
  name: string;
  error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<unknown>>>;
  label?: string;
  formControlFlex?: number;
};

const InputForm = forwardRef(
  ({ control, name, error, label, formControlFlex, ...rest }: Props, ref) => {
    return (
      <FormControl
        flex={1}
        isInvalid={!!error}
      >
        <VStack space={2}>
          {label && (
            <Text
              fontSize='md'
              color='gray.400'
            >
              {label}
            </Text>
          )}
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
              <Input
                size='md'
                padding={4}
                fontSize='md'
                borderWidth={0}
                borderRadius={4}
                caretHidden={false}
                letterSpacing={0.22}
                borderColor='pink.600'
                bg='gray.800'
                color='white'
                selectionColor='white'
                underlineColorAndroid='transparent'
                _hover={{
                  shadow: 0,
                  bg: 'gray.800',
                  borderColor: 'pink.600',
                  color: 'white',
                  placeholderTextColor: 'white'
                }}
                _focus={{
                  borderWidth: 2,
                  borderColor: 'pink.600',
                  bg: 'gray.800',
                  _hover: {
                    borderColor: 'pink.600'
                  }
                }}
                _disabled={{
                  bgColor: 'gray.800',
                  placeholderTextColor: 'gray.600'
                }}
                focusOutlineColor='pink.600'
                invalidOutlineColor='red.400'
                _invalid={{
                  borderWidth: 2,
                  borderColor: 'red.400',
                  _hover: {
                    borderColor: 'red.400'
                  },
                  _focus: {
                    borderColor: 'red.400'
                  }
                }}
                onChangeText={text => onChange(text)}
                value={value ?? ''}
                ref={ref}
                {...rest}
              />
            )}
          />
          {error && (
            <FormControl.ErrorMessage leftIcon={<WarningIcon size='xs' />}>
              {error}
            </FormControl.ErrorMessage>
          )}
        </VStack>
      </FormControl>
    );
  }
);

export default InputForm;
