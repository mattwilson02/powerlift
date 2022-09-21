import { FormControl, WarningOutlineIcon } from 'native-base';
import { forwardRef } from 'react';
import {
  Control,
  Controller,
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge
} from 'react-hook-form';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';
import Input from './Input';

type Props = {
  label?: string;
  control: Control;
  name: string;
  error?: any;
};

const InputForm = forwardRef(
  ({ control, label = '', name, error, ...rest }: Props, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text: string) => onChange(text)}
              value={value ?? ''}
              ref={ref}
              {...rest}
            />
          )}
        />
        {error && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
            {error}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
    );
  }
);
export default InputForm;
