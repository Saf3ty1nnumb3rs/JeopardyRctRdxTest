import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getCategoriesByCount } from '../api/jeopardyApi';
import { setCategories, pickCategory } from '../actions';
import { useApi } from '../hooks/useApi.js';

import Header from './Header';
import AppRoute from './AppRoute';
import Category from './Category';
import CategoryList from './CategoryList';


const App = (props) => {
  const { saveCategories } = props;
  const [response, setResponse] = useState([]);
  // custom hook for api calls, explore making more dynamic later

  const categories = useApi(getCategoriesByCount, 20, response, setResponse);

  useEffect(() => {
    if (props.categories.length < 1) {
      saveCategories(categories);
    }
  }, [categories, saveCategories, props.categories]);
  return (
    <div>
      <div className="trebek" />
      <div className="flex-head">
        <div className="logo" />
        <Header />
      </div>
      <Container>
        <AppRoute path='/categories' location={props.location}>
          <CategoryList categories={props.categories} pickCategory={props.pickMainCategory} />
        </AppRoute>
        <AppRoute path='/category' location={props.location}>
          <Category />
        </AppRoute>
      </Container>
    </div>

  );
};

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveCategories: (categories) => dispatch(setCategories(categories)),
    pickMainCategory: (category) => dispatch(pickCategory(category))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);