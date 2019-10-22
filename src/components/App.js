import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCategoriesByCount } from '../api/jeopardyApi';
import { setCategories } from '../actions';

import Header from './Header';
import AppRoute from './AppRoute';
import Category from './Category';
import CategoryList from './CategoryList';


const App = (props) => {
  const { saveCategories } = props;

  // custom hook for api calls, explore making more dynamic later
  const useApi = (api, params) => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
      async function apiCall() {
        const res = await api(params);
        setResponse(res);
      }
      apiCall();
    }, [api, params]);
    return response;
  }

  const categories = useApi(getCategoriesByCount, 20);

  useEffect(() => {
    if (props.categories.length < 1) {
      saveCategories(categories);
    }
  }, [categories, saveCategories, props.categories]);

  return (
    <div>
      <h2>Jeopardy!</h2>
      <Header />
      <AppRoute path='/categories' location={props.location}>
        <CategoryList />
      </AppRoute>
      <AppRoute path='/category' location={props.location}>
        <Category />
      </AppRoute>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveCategories: (categories) => dispatch(setCategories(categories))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);