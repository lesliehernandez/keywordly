import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class SearchForm extends React.Component {
  state = {
    search: 'Search',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField
          id="search"
          label="Search field"
          type="search"
          onChange={this.handleChange('search')}
          value={this.state.search}
          className={classes.textField}
          margin="normal"
        />
        
      </form>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);

