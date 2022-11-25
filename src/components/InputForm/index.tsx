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
              color='background.7'
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
                borderColor='build.1'
                bg='background.2'
                color='background.10'
                selectionColor='background.10'
                underlineColorAndroid='transparent'
                _hover={{
                  shadow: 0,
                  bg: 'background.2',
                  borderColor: 'build.1',
                  color: 'background.10',
                  placeholderTextColor: 'background.10'
                }}
                _focus={{
                  borderWidth: 2,
                  borderColor: 'build.1',
                  bg: 'background.2',
                  _hover: {
                    borderColor: 'build.1'
                  }
                }}
                _disabled={{
                  bgColor: 'background.2',
                  placeholderTextColor: 'background.3'
                }}
                focusOutlineColor='build.1'
                invalidOutlineColor='error'
                _invalid={{
                  borderWidth: 2,
                  borderColor: 'error',
                  _hover: {
                    borderColor: 'error'
                  },
                  _focus: {
                    borderColor: 'error'
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
