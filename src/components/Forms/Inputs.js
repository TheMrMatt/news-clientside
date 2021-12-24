import React from 'react'
import {useField } from 'formik';
import {Container, Label, Span, Inp, Error} from './InputsElements'

const Inputs = ({className=null, label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Container className={className}>
          <Label className={className} htmlFor={props.id || props.name}><Span>{label}</Span></Label>
          <Inp className={className} {...field} {...props} />
          {meta.touched && meta.error ? (
            <Error className={className}>{meta.error}</Error>
          ) : null}
        </Container>
      );
}

export default Inputs
