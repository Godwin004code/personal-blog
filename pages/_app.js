import '../styles/globals.css'
import AppProvider from '../components/Context/Context'
import {useEffect} from "react"
// appId: "bbf6acad-d4ad-4fee-9df5-d4e3f554f02f", appId: "bbf6acad-d4ad-4fee-9df5-d4e3f554f02f", appId: "bbf6acad-d4ad-4fee-9df5-d4e3f554f02f",
//appId: "b40b7cc7-13dc-4662-8b48-efa668f9b72a", production
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        //appId: "2564d3a2-5313-4cdf-b5bf-238012f6b7cb",
        appId: "bbf6acad-d4ad-4fee-9df5-d4e3f554f02f",
        safari_web_id: "",
        notifyButton: {
          enable: true,
        },
        subdomainName: "devilo",
      });
    });

    return () => {
        window.OneSignal = undefined;
    };
}, []); // <-- run this effect once on mount
  return (
   
   <AppProvider>
     <Component {...pageProps}>
      
    </Component>
   </AppProvider>
   
  )
  
}

export default MyApp
