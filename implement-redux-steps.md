The steps we took to implement Redux

1. Create reducers that you intend to pass to `combineReducers` (in our case it was only one)
2. Generate the reducer that we need to pass to `createStore` using `combineReducers`
3. Add the `redux` and `react-redux` packages
4. Create the `store`
5. Make the `store` available to our React tree using the `Provider` `HOC` component
6. Connect the store to any component who required a piece of `state` using the `connect` function
    * define our `mapStateToProps` function
    * define our `mapDispatchToProps` function in the event we need access to the dispatch function
7. Repeat step #6