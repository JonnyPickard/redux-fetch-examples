import React, { PureComponent } from 'react';

import styles from './UserCard.module.scss';

class UserCard extends PureComponent {
  deleteUser = userId => {
    this.props.deleteUser(userId);
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.userCard}>
        <div className={styles.userCardId}>{user.id}</div>
        <div className={styles.userCardNames}>
          <div>{user.firstName}</div>
          <div>{user.username}</div>
        </div>
        <button
          className={styles.userCardDeleteButton}
          onClick={userId => this.deleteUser(user.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default UserCard;
