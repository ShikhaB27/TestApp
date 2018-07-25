console.log('Starting the app');

setTimeout(() => {
  console.log('Inside callback');
},2000);

setTimeout(() => {
  console.log('Inside the new callback');
},0);

console.log('Finishing up');
