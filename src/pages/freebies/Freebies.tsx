import * as React from 'react';
import { FreebiesContainer } from './Freebies.style';

export interface IContactProps {}

export default class Freebies extends React.Component<IContactProps, any> {
  public render() {
    return (
      <FreebiesContainer>
        <h1>Freebies</h1>
      </FreebiesContainer>
    );
  }
}