import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styles from './UsersList.module.scss';

import { fetchUsers, deleteUser } from '../../actions/actionCreators/usersList';

import UserCard from '../UserCard/UserCard';

class UsersList extends PureComponent {
  static mapStateToProps = state => {
    return {
      usersById: state.usersList.getIn(['users', 'byId']),
      allUserIds: state.usersList.getIn(['users', 'allIds'])
    };
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { allUserIds, usersById } = this.props;

    return (
      <div className={styles.usersList}>
        <ul>
          {allUserIds &&
            usersById &&
            allUserIds.map((userId, index) => {
              const user = usersById.get('user' + userId);

              return (
                <UserCard
                  key={`users-list-${index}`}
                  user={user}
                  deleteUser={this.props.deleteUser}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default connect(UsersList.mapStateToProps, { fetchUsers, deleteUser })(
  UsersList
);
