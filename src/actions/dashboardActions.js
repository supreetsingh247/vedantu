// export function itemsIsLoading(isLoading) { 
//     return { 
//       type: 'ITEMS_IS_LOADING', 
//       isLoading, 
//     }; 
//   } 
  
//   export function itemsHasErrored(hasErrored) {
//     NProgress.done();
//     toastr.error("Unknown error occured.");
//     return {
//       type: 'ITEMS_HAS_ERRORED',
//       hasErrored,
//     };
//   }
  
//   export function itemsFetchDataSuccess(items) {
//     NProgress.done();
//     return {
//       type: 'ITEMS_FETCH_DATA_SUCCESS',
//       items,
//     };
//   }
  
//   export function itemsFetchData(url) {
//     return (dispatch) => {
//       dispatch(clearItemData());
//       dispatch(itemsIsLoading(true));
//       NProgress.start();
//       let myInit = NetworkAdapter.getHeaders('GET');
//       if (isAuthorised) {
//         myInit = NetworkAdapter.getHeaders('GET', true);
//       }
//       NetworkAdapter.fetchData(dispatch, url, myInit, 
//       itemsIsLoading, itemsFetchDataSuccess, itemsHasErrored);
//     };
//   }
  
//   export function clearItems() {
//     return {
//       type: 'CLEAR_ITEMS',
//       items: {},
//     };
//   }
  