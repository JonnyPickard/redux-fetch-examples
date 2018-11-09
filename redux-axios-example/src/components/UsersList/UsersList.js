import React, { PureComponent } from 'react';

import styles from './UsersList.module.scss'

export default class UsersList extends PureComponent {
  render() {
    return (
      <div className={styles.usersList}>
        Users List
      </div>
    )
  }
}