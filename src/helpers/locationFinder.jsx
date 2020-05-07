export default function getLocation(options = {}) {
  // console.log('im in the function');
  // const showLocation = (position) => {
  //   console.log('2');
  //   const { latitude } = position.coords;
  //   const { longitude } = position.coords;
  //   console.log(latitude);
  //   return {
  //     lat: latitude,
  //     lon: longitude,
  //   };
  // };

  // const errorHandler = (err) => {
  //   if (err.code === 1) {
  //     return { error: 'Error: Access is denied!!' };
  //   }
  //   if (err.code === 2) {
  //     return { error: 'Error: Position is unavailable' };
  //   }
  // };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });

  // if (navigator.geolocation) {
  //   console.log('1');
  //   const options = { timeout: 3000 };
  //   console.log(options);
  //   navigator.geolocation.getCurrentPosition(
  //     showLocation,
  //     errorHandler,
  //     options
  //   );
  // } else {
  //   return { error: 'Sorry, your browser does not support geolocation!' };
  // }
}
