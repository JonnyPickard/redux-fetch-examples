import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styles from './UsersList.module.scss';

import { fetchUsers } from '../../actions/actionCreators/usersList';

class UsersList extends PureComponent {
  static mapStateToProps = state => {
    return {
      usersList: state.usersList.users,
      loading: state.usersList.loading
    };
  };

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { usersList, loading } = this.props;

    return (
      <div className={styles.usersList}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <ul>
            {usersList.map((user, index) => (
              <li key={`users-list-${index}`}>{user.firstName}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default connect(UsersList.mapStateToProps)(UsersList);
