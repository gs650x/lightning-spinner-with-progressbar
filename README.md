# Lighnting spinner with custom progress bar.


<video width="320" height="240" controls>
  <source src="./demo.mp4" type="video/mp4">
</video>

check demo.mp4 file in the project to see how it looks like.

Please note call the spinner component as below and set it's showSpinner property to true or false.

`<c-gs-spinner-with-bar show-spinner={showSpinner}></c-gs-spinner-with-bar>`

instead of using it like below as it won't work.

`<template if:true={showSpinner}>`

  `<c-gs-spinner-with-bar></c-gs-spinner-with-bar>`

`</template>`


