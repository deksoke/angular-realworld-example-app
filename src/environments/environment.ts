// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  ori_api_url: 'https://conduit.productionready.io/api',
  api_url: 'http://localhost:55449/api',
  firebase: {
    apiKey: "AIzaSyBeHLGSD7Uu0OrY1WcBGkP4HctzsmANy_M",
    authDomain: "brilliant-fire-8341.firebaseapp.com",
    databaseURL: "https://brilliant-fire-8341.firebaseio.com",
    projectId: "brilliant-fire-8341",
    storageBucket: "brilliant-fire-8341.appspot.com",
    messagingSenderId: "787500207516"
  }
};
