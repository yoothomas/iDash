import { getAuth, GoogleAuthProvider } from "firebase/auth";

const gapi_link = "https://apis.google.com/api.js";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/calendar');
provider.addScope('https://www.googleapis.com/auth/calendar.events');
provider.addScope('https://www.googleapis.com/auth/calendar.addons.execute');

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
auth.useDeviceLanguage();

function listCalendars()
{
     var request = gapi.client.calendar.calendarList.list();

     request.execute(function(resp){
             var calendars = resp.items;
             console.log(calendars);
     });
}