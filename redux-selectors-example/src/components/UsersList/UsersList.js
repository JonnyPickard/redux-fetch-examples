import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styles from './UsersList.module.scss';

import { fetchUsers } from '../../actions/actionCreators/usersList';

import UserCard from '../UserCard/UserCard';

class UsersList extends PureComponent {
  static mapStateToProps = state => {
    return {
      usersList: state.usersList.users
    };
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { usersList } = this.props;

    return (
      <div className={styles.usersList}>
        <ul>
          {usersList &&
            usersList.map((user, index) => (
              <UserCard key={`users-list-${index}`} user={user} />
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(UsersList.mapStateToProps, { fetchUsers })(UsersList);
