// // import * as cookie from 'js-cookie';

// export function getHeaders(method, reqAuth, payload) {
//   const header = {
//     method,
//     headers: {
//       Accept: 'application/json;version=3',
//       'Content-Type': 'application/json',
//     },
//   };
//   // if (reqAuth) header.headers.Authorization = cookie.get('authToken');
//   if (payload) header.body = JSON.stringify(payload);
//   return header;
// }

// export function fetchData(dispatch, url, myInit, loadingAction, 
//   successAction, errorAction, addon) {
//   fetch(url, myInit)
//     .then((response) => {
//       if (!response.ok) {
//         if (response.status >= 400 && response.status < 500) {
//           dispatch(loadingAction(false));
//           return response;
//         } else {
//           throw Error(response);
//         }
//       }
//       dispatch(loadingAction(false));
//       return response;
//     })
//     .then(response => response.json())
//     .then(data => dispatch(successAction(data, addon)))
//     .catch((response) => {
//       console.log(response);
//       dispatch(errorAction(response));
//     });
// }