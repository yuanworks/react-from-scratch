import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

function Button({ children, className }) {

  return (
    <button className={classnames(styles.button, className)}>{ children }</button>
  );
}

export default Button;
